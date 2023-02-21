import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faApple} from '@fortawesome/free-brands-svg-icons/faApple';
import {faGoogle} from '@fortawesome/free-brands-svg-icons/faGoogle';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {sharedContainer} from '@shared/services';
import {AuthServiceContainerType, AuthServiceType} from '@shared/services/auth';
import {Text} from '@shared/components/ui/text';

import * as Styled from './sign-in.styles';

const LOGIN_OPTIONS: Array<{
  name: string;
  icon: IconDefinition;
  optionColor: string;
  size?: number;
}> = [
  {name: 'Facebook', icon: faFacebook, optionColor: '#4267B2'},
  {name: 'Apple', icon: faApple, optionColor: '#282828'},
  {name: 'Google', icon: faGoogle, optionColor: '#DB4437', size: 22},
];

export const SignIn: React.FC = () => (
  <Styled.SignInView edges={['bottom', 'left', 'right']}>
    <Styled.WelcomeMessageImage>
      <Text.Header1>AI powered</Text.Header1>
      <Styled.HeaderText>Financial Manager</Styled.HeaderText>
      <Styled.HeaderDescription>
        Use the power of AI to get your finances organized and structured. Scan
        tips, record voice messages and communicate with your financial manager
        via text.
      </Styled.HeaderDescription>
    </Styled.WelcomeMessageImage>

    <Styled.LoginWithText>Login with</Styled.LoginWithText>

    <Styled.LoginOptionsView>
      {LOGIN_OPTIONS.map(({name, icon, optionColor, size}) => (
        <Styled.LoginOption
          key={name}
          activeOpacity={0.9}
          onPress={() => {
            const authService = sharedContainer.get<AuthServiceType>(
              AuthServiceContainerType,
            );
            authService.socialSignIn(name);
          }}>
          <FontAwesomeIcon size={size || 24} icon={icon} color={optionColor} />
          {/* <Styled.LoginOptionText>{name}</Styled.LoginOptionText> */}
        </Styled.LoginOption>
      ))}
    </Styled.LoginOptionsView>
  </Styled.SignInView>
);
