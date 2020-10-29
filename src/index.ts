import { IExpressEverywhereHandler } from '@gluecode-it/express-everywhere/dist/';
const express = require('serverless-express/express');

export class ExpressEverywhereGoogleCloudHandler implements IExpressEverywhereHandler {
  suits(type?: string | undefined): boolean {
    return type?.toLocaleLowerCase() === 'google-cloud';
  }

  getApp() {
    return express();
  }
}
