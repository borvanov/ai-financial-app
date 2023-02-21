import {useEffect, useState} from 'react';
import {ThemeConsumer, ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTableColumns} from '@fortawesome/free-solid-svg-icons/faTableColumns';
import {faGears} from '@fortawesome/free-solid-svg-icons/faGears';
import {faChartLine} from '@fortawesome/free-solid-svg-icons/faChartLine';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

import {SignIn} from '@pages/sign-in';
import {Dashboard} from '@pages/dashboard';

import {injectAuthService} from '@shared/services';
import {defaultTheme} from '@shared/configurations/theme.configuration';

const {Screen, Navigator} = createBottomTabNavigator();
enum MainNavigatorRouteNames {
  DashboardRoute = 'Dashboard',
  StatisticsRoute = 'Statistics',
  SettingsRoute = 'Settings',
}

function getTabIconByName(
  name: MainNavigatorRouteNames,
): IconDefinition | null {
  switch (name) {
    case MainNavigatorRouteNames.DashboardRoute:
      return faTableColumns;
    case MainNavigatorRouteNames.StatisticsRoute:
      return faChartLine;
    case MainNavigatorRouteNames.SettingsRoute:
      return faGears;
    default:
      return null;
  }
}

function renderTabBarIcon(routeName: string): React.FC<{
  focused: boolean;
  color: string;
  size: number;
}> {
  return ({color}) => {
    const icon = getTabIconByName(routeName as MainNavigatorRouteNames);

    if (icon) {
      return <FontAwesomeIcon icon={icon} color={color} />;
    }

    return null;
  };
}

export const App = () => {
  const {retrieveAuthorizationInformation, authorizationInfo$} =
    injectAuthService();
  const [isUserAuthorized, setIsUserAuthorized] = useState<boolean | null>(
    null,
  );

  useEffect(() => {
    retrieveAuthorizationInformation();

    authorizationInfo$.subscribe(data => {
      if (data !== undefined) {
        setIsUserAuthorized(!!data);
      }
    });
  }, [retrieveAuthorizationInformation, authorizationInfo$]);

  if (isUserAuthorized === null) {
    return null;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <SafeAreaProvider>
        <NavigationContainer>
          {isUserAuthorized ? (
            <ThemeConsumer>
              {({palette}) => (
                <Navigator
                  initialRouteName={MainNavigatorRouteNames.DashboardRoute}
                  sceneContainerStyle={{backgroundColor: palette.common.dark}}
                  screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarIcon: renderTabBarIcon(route.name),
                    tabBarActiveTintColor: palette.primary.main,
                    tabBarInactiveTintColor: palette.fourth.main,
                  })}>
                  <Screen
                    name={MainNavigatorRouteNames.DashboardRoute}
                    component={Dashboard}
                  />
                  <Screen
                    name={MainNavigatorRouteNames.StatisticsRoute}
                    component={Dashboard}
                  />
                  <Screen
                    name={MainNavigatorRouteNames.SettingsRoute}
                    component={Dashboard}
                  />
                </Navigator>
              )}
            </ThemeConsumer>
          ) : (
            <SignIn />
          )}
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
