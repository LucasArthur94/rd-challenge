import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Launch } from './launch';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getNextLaunch(): Promise<Launch> {
    return this.appService.getNextLaunch();
  }

  @Get()
  getLastLaunch(): Promise<Launch> {
    return this.appService.getLastLaunch();
  }

  @Get()
  getNextLaunches(): Promise<Launch[]> {
    return this.appService.getNextLaunches();
  }

  @Get()
  getLastLaunches(): Promise<Launch[]> {
    return this.appService.getLastLaunches();
  }
}
