import React from 'react';
import {IconFill, FillGlyphMapType} from '@ant-design/icons-react-native';

import * as Styled from './sign-in.styles';
import {backgroundImage} from '../../assets';

const LOGIN_OPTIONS: Array<{
  name: string;
  icon: FillGlyphMapType;
  optionColor: string;
}> = [
  {name: 'Google', icon: 'google-square', optionColor: ''},
  {name: 'Facebook', icon: 'facebook', optionColor: ''},
  {name: 'Apple', icon: 'apple', optionColor: ''},
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
        {LOGIN_OPTIONS.map(({name, icon}) => (
          <Styled.LoginOption key={name}>
            <IconFill name={icon} />
            {/* <Styled.LoginOptionText>{name}</Styled.LoginOptionText> */}
          </Styled.LoginOption>
        ))}
      </Styled.LoginOptionsView>
    </Styled.SignInView>
  );
};
