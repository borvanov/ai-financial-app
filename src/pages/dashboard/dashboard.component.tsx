import {MainBackgroundImage} from '@shared/components/ui/main-background-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import * as Styled from './dashboard.styles';

const NOTIFICATIONS = ['New trend in your car spends']; // Temporary

export const Dashboard: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <Styled.Container>
      <MainBackgroundImage imageStyle={{paddingTop: insets.top + 10}}>
        <Styled.ProfileRow>
          <Styled.UserInfoView>
            <Styled.GreetingText>Hello, Anton!</Styled.GreetingText>
            {NOTIFICATIONS.map(notification => (
              <Styled.NotificationText key={notification}>
                <Styled.TextColored>*</Styled.TextColored> {notification}
              </Styled.NotificationText>
            ))}
          </Styled.UserInfoView>
          <Styled.ProfileImage
            source={{
              uri: 'https://www.cnet.com/a/img/resize/6e685229c97873ba6ad9059829e949637813e680/hub/2019/06/04/e251d28b-9249-48b0-8598-e0bc3982c7ae/apple-wwdc-2019-memoji-stickers-2854.jpg?auto=webp&fit=crop&height=1200&width=1200',
            }}
          />
        </Styled.ProfileRow>
      </MainBackgroundImage>
    </Styled.Container>
  );
};
