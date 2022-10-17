import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3123/launches";

const axiosInstance = axios.create({
  baseURL,
});

export const useLaunches = () => {
  const [launches, setLaunches] = React.useState([]);

  React.useEffect(() => {
    axiosInstance.get("/").then((res) => {
      setLaunches(res.data);
    });
  }, []);

  return launches;
}
