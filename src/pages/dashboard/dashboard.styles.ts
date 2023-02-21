import {Text} from '@shared/components/ui/text';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ProfileRow = styled.View`
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
  color: #d61355;
  font-weight: 700;
`;
