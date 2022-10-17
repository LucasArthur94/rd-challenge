import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('launches')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('next')
  getNextLaunch() {
    return this.appService.getNextLaunch();
  }

  @Get('last')
  getLastLaunch() {
    return this.appService.getLastLaunch();
  }

  @Get('upcoming')
  getNextLaunches() {
    return this.appService.getNextLaunches();
  }

  @Get('past')
  getLastLaunches() {
    return this.appService.getLastLaunches();
  }
}
