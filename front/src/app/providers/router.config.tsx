import Home from '../../pages/home/home';
import { MessagePage } from '../../pages/message';
import { APP_ROUTES, type RouterConfig } from './router.types';

export const config: RouterConfig = {
  [APP_ROUTES.HOME]: {
    path: '/',
    element: <Home />,
  },
  [APP_ROUTES.MESSAGE]: {
    path: 'message',
    element: <MessagePage />,
  },
};
