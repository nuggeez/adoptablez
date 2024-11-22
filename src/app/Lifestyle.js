import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Lifestyle() {
  const theme = useTheme();
  const router = useRouter();

  const handleProceed = () => {
    router.push('Preferences');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
        <Text style={styles.signupText}>Lifestyle</Text>

        {/* pwede rani nimo ilisdan to Proceed Button, Marisol, kay para lang manavigate ni kyla to prefences page */}
        <View style={styles.proceedContainer}>
          <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
            <Text style={styles.proceedButtonText}>
              Navigate to Preferences Page
            </Text>
          </TouchableOpacity>
        </View>



      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    paddingTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  signupText: {
    fontSize: 24, // Adjust font size as needed
  },


  //pwede rani nimo ilisdan to Proceed Button, Marisol, kay para lang manavigate ni kyla to prefences page
  proceedContainer: {
    width: '100%',
    alignItems: 'center',
  },
  proceedButton: {
    backgroundColor: '#68C2FF',
    width: '70%',
    height: 40,
    marginTop: 50,
    justifyContent: 'center',
    borderRadius: 5,
  },
  proceedButtonText: {
    fontFamily: 'Lato',
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
});