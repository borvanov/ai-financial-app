import {useEffect, useState} from 'react';
import {ThemeConsumer, ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTableColumns} from '@fortawesome/free-solid-svg-icons/faTableColumns';
import {faGears} from '@fortawesome/free-solid-svg-icons/faGears';
import {faChartLine} from '@fortawesome/free-solid-svg-icons/faChartLine';
import {faMicrophone} from '@fortawesome/free-solid-svg-icons/faMicrophone';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

import {SignIn} from '@pages/sign-in';
import {Dashboard} from '@pages/dashboard';
import {Settings} from '@pages/settings';
import {Statistics} from '@pages/statistics';
import {Record} from '@pages/record';

import {injectAuthService} from '@shared/services';
import {defaultTheme} from '@shared/configurations/theme.configuration';

const {Screen, Navigator} = createBottomTabNavigator();
enum MainNavigatorRouteNames {
  DashboardRoute = 'Dashboard',
  StatisticsRoute = 'Statistics',
  SettingsRoute = 'Settings',
  RecordRoute = 'Record',
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
    case MainNavigatorRouteNames.RecordRoute:
      return faMicrophone;
    default:
      return null;
  }
}

function renderTabBarIcon(routeName: string): React.FC<{
  focused: boolean;
  color: string;
  size: number;
}> {
  return ({color, focused}) => {
    const icon = getTabIconByName(routeName as MainNavigatorRouteNames);

    if (icon) {
      return (
        <FontAwesomeIcon
          icon={icon}
          color={
            routeName === MainNavigatorRouteNames.RecordRoute && !focused
              ? '#DB2B39'
              : color
          }
        />
      );
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
              {({palette, typography}) => (
                <Navigator
                  initialRouteName={MainNavigatorRouteNames.DashboardRoute}
                  sceneContainerStyle={{backgroundColor: palette.common.dark}}
                  screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarIcon: renderTabBarIcon(route.name),
                    tabBarActiveTintColor: palette.secondary.main,
                    tabBarInactiveTintColor: palette.fourth.main,
                    tabBarLabelStyle: {
                      fontFamily: typography.fontFamily.primary,
                    },
                    tabBarStyle: {
                      // backgroundColor: palette.common.dark,
                      backgroundColor: '#101317',
                      borderTopWidth: 0,
                    },
                    tabBarItemStyle: {
                      borderWidth: 0,
                    },
                  })}>
                  <Screen
                    name={MainNavigatorRouteNames.StatisticsRoute}
                    component={Statistics}
                  />
                  <Screen
                    name={MainNavigatorRouteNames.DashboardRoute}
                    component={Dashboard}
                  />
                  <Screen
                    name={MainNavigatorRouteNames.SettingsRoute}
                    component={Settings}
                  />
                  <Screen
                    name={MainNavigatorRouteNames.RecordRoute}
                    component={Record}
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
