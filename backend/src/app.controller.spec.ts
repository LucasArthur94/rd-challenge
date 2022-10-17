import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MOCKED_LAUNCH } from './mocks';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
      imports: [HttpModule],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return next launches', () => {
      jest
        .spyOn(appService, 'getNextLaunches')
        .mockReturnValue([MOCKED_LAUNCH] as any);

      expect(appController.getNextLaunches()).toStrictEqual([MOCKED_LAUNCH]);
    });

    it('should return empty next launches', () => {
      jest.spyOn(appService, 'getNextLaunches').mockReturnValue([] as any);

      expect(appController.getNextLaunches()).toStrictEqual([]);
    });

    it('should return last launches', () => {
      jest
        .spyOn(appService, 'getLastLaunches')
        .mockReturnValue([MOCKED_LAUNCH] as any);

      expect(appController.getLastLaunches()).toStrictEqual([MOCKED_LAUNCH]);
    });

    it('should return empty previous launches', () => {
      jest.spyOn(appService, 'getLastLaunches').mockReturnValue([] as any);

      expect(appController.getLastLaunches()).toStrictEqual([]);
    });

    it('should return next launch', () => {
      jest
        .spyOn(appService, 'getNextLaunch')
        .mockReturnValue(MOCKED_LAUNCH as any);

      expect(appController.getNextLaunch()).toStrictEqual(MOCKED_LAUNCH);
    });

    it('should return empty next launch', () => {
      jest.spyOn(appService, 'getNextLaunch').mockReturnValue(null);

      expect(appController.getNextLaunch()).toStrictEqual(null);
    });

    it('should return last launch', () => {
      jest
        .spyOn(appService, 'getLastLaunch')
        .mockReturnValue(MOCKED_LAUNCH as any);

      expect(appController.getLastLaunch()).toStrictEqual(MOCKED_LAUNCH);
    });

    it('should return empty previous launch', () => {
      jest.spyOn(appService, 'getLastLaunch').mockReturnValue(null);

      expect(appController.getLastLaunch()).toStrictEqual(null);
    });
  });
});
