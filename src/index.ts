import { IExpressEverywhereHandler } from '@gluecode-it/express-everywhere/dist/';
const express = require('serverless-express/express');

export class ExpressEverywhereGoogleCloudHandler implements IExpressEverywhereHandler {
  suits(type?: string | undefined): boolean {
    return type?.toLocaleLowerCase() === 'google-cloud' || !!process.env.K_SERVICE;
  }

  getApp() {
    return express();
  }
}
