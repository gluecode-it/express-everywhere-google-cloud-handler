import { ExpressEverywhereGoogleCloudHandler } from '.';

describe(ExpressEverywhereGoogleCloudHandler.name, () => {
  describe('getApp()', () => {
    it('returns local express if nothing given', () => {
      const handler = new ExpressEverywhereGoogleCloudHandler();
      expect(handler.getApp()).toBeDefined();
    });
  });
  describe('suits()', () => {
    it('returns true if type is "google-cloud', () => {
      const handler = new ExpressEverywhereGoogleCloudHandler();
      expect(handler.suits('google-cloud')).toBeTruthy();
    });
    it('returns true if type is not "google-cloud', () => {
      const handler = new ExpressEverywhereGoogleCloudHandler();
      expect(handler.suits('not google-cloud')).toBeFalsy();
    });
  });
});
