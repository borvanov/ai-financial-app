import {Text} from '@shared/components/ui/text';
import {injectAuthService} from '@shared/services';
import {TouchableOpacity} from 'react-native';
import * as Styled from './settings.styles';

export const Settings: React.FC = () => {
  const {logout} = injectAuthService();

  return (
    <Styled.Container>
      <TouchableOpacity onPress={logout}>
        <Text.Regular style={{color: 'white'}}>Logout</Text.Regular>
      </TouchableOpacity>
    </Styled.Container>
  );
};
