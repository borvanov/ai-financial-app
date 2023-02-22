import {Text} from '@shared/components/ui/text';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 10px;
`;

export const SettingOption = styled.TouchableOpacity`
  padding: 20px 10px;
  background-color: ${({theme}) => theme.palette.fourth.main};
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const OptionText = styled(Text.Regular)`
  color: ${({theme}) => theme.palette.common.light};
`;
