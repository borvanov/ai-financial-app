import {SignIn} from '@pages/sign-in';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <SignIn />
    </NavigationContainer>
  </SafeAreaProvider>
);
