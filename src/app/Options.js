import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Options({ route }) {
  const theme = useTheme();
  const router = useRouter();
  
  // Safely retrieve 'userName' from route params or use a fallback string
  const { userName } = route?.params || { userName: "User" }; // Default to "User" if no name is passed

  const handleAdopt = () => {
    router.push("Lifestyle");
  };

  const handleList = () => {
    router.push("/Main/List"); // Correct path for List screen using expo-router
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.greetingsText}>Hello, {userName}!</Text>
        <Text style={styles.questionText}>Are you an adopter or looking to adopt?</Text>

        <View style={styles.answerButtonsContainer}>
            <TouchableOpacity style={styles.adoptButton} onPress={handleAdopt}>
                <Text style={styles.adoptText}>I want to adopt</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listButton} onPress={handleList}>
                <Text style={styles.listText}>I want to list a pet</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#68C2FF",
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingsText: {
    fontSize: 18, 
    fontFamily: 'Lato',
    color: 'white',
  },
  questionText: {
    fontSize: 25, 
    fontFamily: 'Lilita',
    color: 'white',
    marginTop: 15,
  },
  answerButtonsContainer: {
    flexDirection: 'row',
    marginTop: 80,
  },
  adoptButton: {
    justifyContent: 'center',
    width: '40%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    height: 40,
    marginRight: 10,
  },
  adoptText: {
    textAlign: 'center',
    fontFamily: 'Lato',
    fontSize: 18,
    color: 'white',
  },
  listButton: {
    justifyContent: 'center',
    width: '40%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    height: 40,
    marginLeft: 10,
  },
  listText: {
    textAlign: 'center',
    fontFamily: 'Lato',
    fontSize: 18,
    color: 'white',
  },
});