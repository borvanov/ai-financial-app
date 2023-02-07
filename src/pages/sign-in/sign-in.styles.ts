import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const SignInView = styled(SafeAreaView)`
  flex: 1;
  background-color: #161b22;
`;

export const WelcomeMessageView = styled.View`
  flex: 1;
  margin: 0 10px;
  overflow: hidden;
  border-radius: 50px;
`;

export const WelcomeMessageImage = styled.ImageBackground`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 20px 30px 20px;
`;

export const welcomeMessageViewStyle = {
  borderBottomLeftRadius: 40,
  borderBottomRightRadius: 40,
};

export const WelcomeMessageImageFade = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: rgba(60, 0, 14, 0.3); */
`;

export const HeaderText = styled.Text`
  font-family: 'Poppins';
  font-size: 40px;
`;

export const HeaderTextBold = styled(HeaderText)`
  font-weight: 700;
`;

export const LoginOptionsView = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px;
  gap: 10px;
`;

export const LoginOption = styled.TouchableOpacity`
  flex: 1;
  height: 60px;
  border-radius: 40px;
  background-color: #daddd8;

  justify-content: center;
  align-items: center;
`;

export const LoginOptionText = styled.Text`
  font-family: 'Poppins';
`;

export const LoginWithText = styled.Text`
  font-family: 'Poppins';
  font-size: 16px;
  text-align: center;
  width: 100%;
  margin: 30px 0 20px 0;
  color: rgba(255, 255, 255, 0.6);
`;

export const HeaderDescription = styled.Text`
  margin-top: 20px;
  font-family: 'Poppins';
`;
