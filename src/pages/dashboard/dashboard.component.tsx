import {MainBackgroundImage} from '@shared/components/ui/main-background-image';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import * as Styled from './dashboard.styles';

export const Dashboard: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <Styled.Container>
      <MainBackgroundImage imageStyle={{paddingTop: insets.top}}>
        <Text>Hello</Text>
        <View style={{height: 50, width: 50}}></View>
      </MainBackgroundImage>
    </Styled.Container>
  );
};
