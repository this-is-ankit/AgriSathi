class AnalyticsService {
  logEvent(eventName: string, params?: Record<string, any>) {
    // In production, wire this to Firebase Analytics or Mixpanel
    if (__DEV__) {
      console.log(`[Analytics] ${eventName}`, params || {});
    }
    // analytics().logEvent(eventName, params);
  }

  logScreenView(screenName: string, screenClass: string) {
    if (__DEV__) {
      console.log(`[Analytics] Screen View: ${screenName} (${screenClass})`);
    }
    // analytics().logScreenView({
    //   screen_name: screenName,
    //   screen_class: screenClass,
    // });
  }

  setUserProperties(properties: Record<string, any>) {
    if (__DEV__) {
      console.log('[Analytics] Set User Properties:', properties);
    }
    // analytics().setUserProperties(properties);
  }
}

export const analyticsService = new AnalyticsService();
