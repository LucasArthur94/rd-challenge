import { Injectable } from '@nestjs/common';
import { Launch } from './launch';
import { spaceXAPI } from './api';

@Injectable()
export class AppService {
  async getNextLaunches(): Promise<Launch[]> {
    const res = await spaceXAPI.get('/launches/upcoming');

    return res.data as Launch[];
  }

  async getLastLaunches(): Promise<Launch[]> {
    const res = await spaceXAPI.get('/launches/past');

    return res.data as Launch[];
  }

  async getNextLaunch(): Promise<Launch> {
    const res = await spaceXAPI.get('/launches/next');

    return res.data as Launch;
  }

  async getLastLaunch(): Promise<Launch> {
    const res = await spaceXAPI.get('/launches/latest');

    return res.data as Launch;
  }
}
