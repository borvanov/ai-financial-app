import {BehaviorSubject} from 'rxjs';

export interface AuthInfo {}

export interface AuthServiceType {
  authorizationInfo$: BehaviorSubject<AuthInfo | null | undefined>;

  socialSignIn: (network: string) => void;
  retrieveAuthorizationInformation: () => void;
}

export const AuthServiceContainerType = Symbol.for('AuthService');
