import {MainBackgroundImage} from '@shared/components/ui/main-background-image';
import {Text} from '@shared/components/ui/text';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const SignInView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.palette.common.dark};
`;

export const WelcomeMessageImage = styled(MainBackgroundImage)`
  flex: 1;
`;

export const HeaderText = styled(Text.Header1)`
  font-weight: 400;
`;

export const LoginOptionsView = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px 20px;
  gap: 10px;
`;

export const LoginOption = styled.TouchableOpacity`
  flex: 1;
  height: 50px;
  border-radius: 40px;
  background-color: ${({theme}) => theme.palette.common.light};

  justify-content: center;
  align-items: center;
`;

export const LoginWithText = styled(Text.Regular)`
  text-align: center;
  width: 100%;
  margin: 30px 0 20px 0;
  color: rgba(255, 255, 255, 0.6);
`;

export const HeaderDescription = styled(Text.Regular)`
  margin-top: 20px;
`;
