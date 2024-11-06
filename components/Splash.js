// SplashScreen.js
import * as React from 'react';
import { View, StyleSheet, Image, Dimensions, Text, } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const Splash = () => {
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.splashContainer, { backgroundColor: theme.colors.primary }]}>
        <Image
          source={require('../assets/Splash/logoImage.png')}
          style={styles.logoImage}
          resizeMode='contain'
        />
        <Text style={styles.taglineText}>Bringing paws and people together</Text>
        <Image
            source={require('../assets/Splash/splashImage.png')}
            style={styles.splashImage}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  splashContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center', // Center contents vertically
  },
  logoImage: {
    height: 70,
    width: 400,
    marginTop: 150,
  },
  taglineText: {
    fontSize: 18,
    color: '#68C2FF',
    marginTop: 20,
    fontStyle: 'Lato',
  },
  splashImage: {
    height: 550,
    width: 550,
    marginTop: 150,
  },
});

export default Splash;
