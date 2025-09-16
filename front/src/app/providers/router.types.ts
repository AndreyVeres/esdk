import type { RouteObject } from 'react-router-dom';

export enum APP_ROUTES {
  HOME = 'home',
  MESSAGE = 'message',
}

export type RouterConfig = Record<APP_ROUTES, RouteObject>;
