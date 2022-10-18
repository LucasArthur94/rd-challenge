import axios from "axios";
import { useState } from "react";
import { LaunchInterface } from "../types/launch-interface";

const baseURL = "http://localhost:3123/launches";

const axiosInstance = axios.create({
  baseURL,
});

export const useLaunches = () => {
  const [upcomingLaunches, setUpcomingLaunches] = useState<LaunchInterface[]>([]);
  const [pastLaunches, setPastLaunches] = useState<LaunchInterface[]>([]);
  const [nextLaunch, setNextLaunch] = useState<LaunchInterface>();
  const [lastLaunch, setLastLaunch] = useState<LaunchInterface>();

  const getUpcomingLaunches = async () => {
    axiosInstance.get("/upcoming").then((res) => {
      console.log(res.data)
      setUpcomingLaunches(res.data);
    });
  }

  const getPastLaunches = async () => {
    axiosInstance.get("/past").then((res) => {
      setPastLaunches(res.data);
    });
  }

  const getNextLaunch = async () => {
    axiosInstance.get("/next").then((res) => {
      setNextLaunch(res.data);
    });
  }

  const getLastLaunch = async () => {
    axiosInstance.get("/last").then((res) => {
      setLastLaunch(res.data);
    });
  }

  return {
    upcomingLaunches,
    pastLaunches,
    nextLaunch,
    lastLaunch,
    getUpcomingLaunches,
    getPastLaunches,
    getNextLaunch,
    getLastLaunch,
  }
}
