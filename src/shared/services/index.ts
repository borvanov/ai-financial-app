import {Container} from 'inversify';

import {AuthService, AuthServiceContainerType, AuthServiceType} from './auth';

const sharedContainer = new Container();

sharedContainer
  .bind<AuthServiceType>(AuthServiceContainerType)
  .to(AuthService)
  .inSingletonScope();

export const injectAuthService = (): AuthServiceType =>
  sharedContainer.get<AuthServiceType>(AuthServiceContainerType);

export {sharedContainer};
