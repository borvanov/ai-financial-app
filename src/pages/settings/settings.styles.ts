import {Text} from '@shared/components/ui/text';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 10px;
`;

export const SettingOption = styled.TouchableOpacity`
  flex: 1;
  padding: 20px 10px;
  background-color: ${({theme}) => theme.palette.sixths.main};
  border-radius: 5px;
  margin: 0 10px 10px 0;
`;

export const OptionText = styled(Text.Regular)`
  /* color: ${({theme}) => theme.palette.common.light}; */
`;

export const LogoutButton = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: ${({theme}) => theme.palette.fifth.main};
  padding: 10px 15px;
`;
