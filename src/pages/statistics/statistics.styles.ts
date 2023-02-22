import {Text} from '@shared/components/ui/text';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  /* flex: 1; */
  padding: 0 20px;
`;

export const PageHeader = styled(Text.Header1)`
  color: ${({theme}) => theme.palette.common.light};
`;
