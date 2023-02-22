import {MainBackgroundImage} from '@shared/components/ui/main-background-image';
import {Text} from '@shared/components/ui/text';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import * as Styled from './dashboard.styles';

const NOTIFICATIONS = ['New trend in your car spends']; // Temporary
const RECORDS = [
  {
    id: 1,
    periodical: 'Monthly payment',
    entity: 'Spotify',
    currency: 'USD',
    amount: 20,
    date: Date.now(),
  },
  {
    id: 2,
    periodical: 'One-time payment',
    entity: 'Gift shop',
    currency: 'USD',
    amount: 12,
    date: Date.now(),
  },
]; // Temporary

export const Dashboard: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <Styled.Container>
      <MainBackgroundImage imageStyle={{paddingTop: insets.top + 10}}>
        <Styled.InformationRow>
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
        </Styled.InformationRow>

        <Styled.InformationRow>
          <Styled.CurrencyChip>
            <Styled.CurrencyText>USD</Styled.CurrencyText>
          </Styled.CurrencyChip>
        </Styled.InformationRow>

        <Text.Header1>55.342</Text.Header1>
        <Styled.SpendsDescription>
          Overall spent in this month
        </Styled.SpendsDescription>
      </MainBackgroundImage>

      <Styled.HistoryContent>
        <Styled.HistoryHeader>Latest records</Styled.HistoryHeader>

        {RECORDS.map(({currency, amount, id, entity, periodical, date}) => (
          <Styled.RecordContainer key={String(id)}>
            <Styled.RecordCategoryImage />
            <Styled.RecordDetails>
              <Styled.RecordText>{entity}</Styled.RecordText>
              <Styled.RecordText>{periodical}</Styled.RecordText>
              <Styled.RecordTextDate>
                {new Date(date).toLocaleString('en-GB', {timeZone: 'UTC'})}
              </Styled.RecordTextDate>
            </Styled.RecordDetails>
            <Styled.SpentText>
              -{amount} {currency}
            </Styled.SpentText>
          </Styled.RecordContainer>
        ))}
      </Styled.HistoryContent>
    </Styled.Container>
  );
};
