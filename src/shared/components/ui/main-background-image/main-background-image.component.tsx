import {StyleProp, ViewStyle, ImageStyle} from 'react-native';
import * as Styled from './main-background-image.styles';
import {backgroundImage} from '../../../../assets';

export const MainBackgroundImage: React.FC<{
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  children?: React.ReactNode;
}> = ({style, children, imageStyle}) => (
  <Styled.ImageView style={[Styled.viewStyle, style]}>
    <Styled.Image source={backgroundImage} style={[imageStyle]}>
      {children}
    </Styled.Image>
  </Styled.ImageView>
);
