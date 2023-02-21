import {Alert} from 'react-native';
import {BehaviorSubject} from 'rxjs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {injectable, decorate} from 'inversify';
import {AuthInfo, AuthServiceType} from './auth.types';

export class AuthService implements AuthServiceType {
  public authorizationInfo$: BehaviorSubject<AuthInfo | null | undefined> =
    new BehaviorSubject<AuthInfo | null | undefined>(undefined);

  constructor() {
    this.retrieveAuthorizationInformation =
      this.retrieveAuthorizationInformation.bind(this);
  }

  public retrieveAuthorizationInformation(): void {
    try {
      AsyncStorage.getItem('@Token').then(storedAuthorizationInfoJson => {
        if (storedAuthorizationInfoJson) {
          const storedAuthorizationInfo = JSON.parse(
            storedAuthorizationInfoJson,
          );
          this.authorizationInfo$.next(storedAuthorizationInfo as AuthInfo);
        } else {
          this.authorizationInfo$.next(null);
        }
      }); // TODO: move the storage key to Storage Service
    } catch (error) {}
  }

  public socialSignIn(network: string): void {
    Alert.alert(
      'Social Authorization',
      `${network} wants to open Safari to log in. Proceed?`,
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Yes',
          isPreferred: true,
          onPress: () => {
            this.authorizationInfo$.next({});
          },
        },
      ],
    );
  }
}

decorate(injectable(), AuthService);
