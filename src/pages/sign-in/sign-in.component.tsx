import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faApple} from '@fortawesome/free-brands-svg-icons/faApple';
import {faGoogle} from '@fortawesome/free-brands-svg-icons/faGoogle';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

import * as Styled from './sign-in.styles';
import {backgroundImage} from '../../assets';

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

export const SignIn: React.FC = () => {
  // const insets = useSafeAreaInsets();

  return (
    <Styled.SignInView edges={['bottom', 'left', 'right']}>
      <Styled.WelcomeMessageView style={Styled.welcomeMessageViewStyle}>
        <Styled.WelcomeMessageImage source={backgroundImage}>
          <Styled.HeaderTextBold>AI powered</Styled.HeaderTextBold>
          <Styled.HeaderText>Financial Manager</Styled.HeaderText>
        </Styled.WelcomeMessageImage>
        <Styled.WelcomeMessageImageFade />
      </Styled.WelcomeMessageView>

      <Styled.LoginWithText>Login with</Styled.LoginWithText>

      <Styled.LoginOptionsView>
        {LOGIN_OPTIONS.map(({name, icon, optionColor, size}) => (
          <Styled.LoginOption key={name}>
            <FontAwesomeIcon
              size={size || 24}
              icon={icon}
              color={optionColor}
            />
            {/* <Styled.LoginOptionText>{name}</Styled.LoginOptionText> */}
          </Styled.LoginOption>
        ))}
      </Styled.LoginOptionsView>
    </Styled.SignInView>
  );
};
