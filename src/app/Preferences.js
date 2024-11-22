import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Preferences() {
  const theme = useTheme();
  const router = useRouter();

  const handleFindPet = () => {
    router.push('Main');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
        <Text style={styles.signupText}>Preferences</Text>

        {/* pwede rani nimo ilisdan to Find My Pet Button, Kyla, kay para lang manavigate to Main */}
      <View style={styles.findPetContainer}>
          <TouchableOpacity style={styles.findPetButton} onPress={handleFindPet}>
            <Text style={styles.findPetButtonText}>
              Navigate to Main
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
  },
  signupText: {
    fontSize: 24, // Adjust font size as needed
  },

  //pwede rani nimo ilisdan to Find My Pet Button, Kyla, kay para lang manavigate to Main
  findPetContainer: {
    width: '100%',
    alignItems: 'center',
  },
  findPetButton: {
    backgroundColor: '#68C2FF',
    width: '70%',
    height: 40,
    marginTop: 50,
    justifyContent: 'center',
    borderRadius: 5,
  },
  findPetButtonText: {
    fontFamily: 'Lato',
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
});