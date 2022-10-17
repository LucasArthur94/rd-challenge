import { Observable, map, catchError } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Launch } from './launch';

const SPACEX_URL = 'https://api.spacexdata.com/v5';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getNextLaunches(): Observable<AxiosResponse<Launch[]>> {
    console.log('entrei aqui')
    return this.httpService
      .get(`${SPACEX_URL}/launches/upcoming`)
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }

  getLastLaunches(): Observable<AxiosResponse<Launch[]>> {
    return this.httpService
      .get(`${SPACEX_URL}/launches/past`)
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }

  getNextLaunch(): Observable<AxiosResponse<Launch>> {
    return this.httpService
      .get(`${SPACEX_URL}/launches/next`)
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }

  getLastLaunch(): Observable<AxiosResponse<Launch>> {
    return this.httpService
      .get(`${SPACEX_URL}/launches/latest`)
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }
}
