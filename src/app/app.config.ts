import { InjectionToken } from '@angular/core';

export type AppConfig = {
  apiEndpoint: string,
  title: string
};

export const HERO_DI_CONFIG: AppConfig = {
  apiEndpoint: 'api.heroes.com',
  title: 'Dependency Injection'
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');