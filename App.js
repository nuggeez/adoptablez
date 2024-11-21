import React, { useEffect, } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Import your screens
import Splash from './components/Splash';
import Login from './components/Login';
import Signup from './components/Signup';
import Options from './components/Options';
import Preferences from './components/Preferences';
import Lifestyle from './components/Lifestyle';
import Main from './components/Main';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    secondary: 'black',
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lilita': require('./assets/fonts/LilitaOne-Regular.ttf'),
    'Lato': require('./assets/fonts/Lato-Semibold.ttf'),
  });

  // Prevent splash screen from hiding automatically
  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.preventAutoHideAsync();
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Optionally add a loading indicator here while fonts load
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Options"
              component={Options}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Preferences"
              component={Preferences}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Lifestyle"
              component={Lifestyle}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
