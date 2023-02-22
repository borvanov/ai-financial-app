import {Text} from '@shared/components/ui/text';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const InformationRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const UserInfoView = styled.View`
  flex-direction: column;
`;

export const GreetingText = styled(Text.Regular)`
  font-size: 20px;
  font-weight: 600;
`;

export const ProfileImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 24px;
`;

export const NotificationText = styled(Text.Regular)`
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
`;

export const TextColored = styled(NotificationText)`
  color: ${({theme}) => theme.palette.fifth.main};
  font-weight: 700;
`;

export const CurrencyChip = styled.View`
  margin-top: 40px;
  margin-bottom: 5px;
  padding: 5px 10px;
  background-color: ${({theme}) => theme.palette.fourth.main};
  border-radius: 20px;
`;

export const CurrencyText = styled(Text.Regular)`
  color: ${({theme}) => theme.palette.common.light};
  font-weight: 400;
`;

export const SpendsDescription = styled(Text.Regular)`
  font-size: 12px;
  opacity: 0.6;
`;

export const HistoryContent = styled.View`
  margin-top: 30px;
  padding: 0 10px;
`;

export const HistoryHeader = styled(Text.Header1)`
  color: ${({theme}) => theme.palette.common.light};
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
`;

export const RecordContainer = styled.View`
  background-color: ${({theme}) => theme.palette.sixths.main};
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RecordCategoryImage = styled.View`
  width: 60px;
  height: 60px;
  background-color: ${({theme}) => theme.palette.primary.main};
  opacity: 0.3;
  border-radius: 5px;
`;

export const RecordDetails = styled.View`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 0 10px;
  flex: 1;
`;

export const RecordText = styled(Text.Regular)`
  color: ${({theme}) => theme.palette.common.light};
  font-size: 12px;
`;

export const RecordTextDate = styled(RecordText)`
  opacity: 0.3;
`;

export const SpentText = styled(Text.Regular)`
  color: ${({theme}) => theme.palette.common.light};
  font-weight: 700;
`;
