import express, { NextFunction, Request, RequestHandler, Response } from 'express';
import { validationResult } from 'express-validator';
import AppLogger from './logger';



export default class AppServer {
  private app: any = express();
  private debug: boolean = true;

  constructor(options?: any) {
    if(options && options.hasOwnProperty('debug'))
      this.debug = options.debug;
  }
  run(port?: number) {
    this.app.listen(port || 8888, () => console.log(`Application is running on port ${port || 8888}`))
  }
}