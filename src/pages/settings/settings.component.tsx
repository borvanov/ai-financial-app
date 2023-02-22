import {injectAuthService} from '@shared/services';
import {Alert, FlatList} from 'react-native';
import * as Styled from './settings.styles';

export const Settings: React.FC = () => {
  const {logout} = injectAuthService();
  const settingsOptions = [
    {
      name: 'FAQ',
      onPress: () => {},
    },
    {
      name: 'Write to support',
      onPress: () => {},
    },
    {
      name: 'Log out',
      onPress: () => {
        Alert.alert('Confirm action', 'Are you sure you want to logout?', [
          {text: 'No', isPreferred: true},
          {text: 'Yes', onPress: logout},
        ]);
      },
    },
  ];

  return (
    <Styled.Container>
      <FlatList
        data={settingsOptions}
        renderItem={({item: {name, onPress}}) => (
          <Styled.SettingOption
            key={name}
            activeOpacity={0.9}
            onPress={onPress}>
            <Styled.OptionText>{name}</Styled.OptionText>
          </Styled.SettingOption>
        )}
      />
    </Styled.Container>
  );
};
