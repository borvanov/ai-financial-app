import {Text} from '@shared/components/ui/text';
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
  ];

  return (
    <Styled.Container>
      <Text.Header1 themeStyle="light">Settings</Text.Header1>
      <FlatList
        data={settingsOptions}
        numColumns={2}
        renderItem={({item: {name, onPress}}) => (
          <Styled.SettingOption
            key={name}
            activeOpacity={0.9}
            onPress={onPress}>
            <Styled.OptionText themeStyle="light">{name}</Styled.OptionText>
          </Styled.SettingOption>
        )}
      />
      <Styled.LogoutButton
        onPress={() => {
          Alert.alert('Confirm action', 'Are you sure you want to logout?', [
            {text: 'No', isPreferred: true},
            {text: 'Yes', onPress: logout},
          ]);
        }}>
        <Styled.OptionText>Log out</Styled.OptionText>
      </Styled.LogoutButton>
    </Styled.Container>
  );
};
