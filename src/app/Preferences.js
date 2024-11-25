import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Foundation from "@expo/vector-icons/Foundation";

export default function Preferences() {
  const theme = useTheme();
  const router = useRouter();

  const [petSize, setPetSize] = React.useState(9);
  const [personality, setPersonality] = React.useState(50);
  const [selectedPet, setSelectedPet] = React.useState(null);
  const [selectedGender, setSelectedGender] = React.useState(null);

  const handleFindPet = () => {
    router.push("Main");
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[styles.container, { backgroundColor: theme.colors.primary }]}
      >
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <View style={styles.backButtonContainer}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </View>
        </TouchableOpacity>

        <Text style={styles.signupText}>Nice to meet you User,</Text>
        <Text style={styles.titleText}>
          We'll help you find the right pet for you!
        </Text>

        {/* Pet Selection */}
        <Text style={styles.optionText}>Select Pet</Text>
        <View style={styles.petSelection}>
          <TouchableOpacity
            style={[
              styles.petButton,
              selectedPet === "cat" && styles.selectedButton,
            ]}
            onPress={() => setSelectedPet("cat")}
          >
            <View style={styles.buttonContent}>
              <MaterialCommunityIcons
                name="cat"
                size={24}
                color={selectedPet === "cat" ? "#68C2FF" : "gray"}
              />
              <Text
                style={[
                  styles.petButtonText,
                  selectedPet === "cat" && styles.selectedText,
                ]}
              >
                Cat
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.petButton,
              selectedPet === "dog" && styles.selectedButton,
            ]}
            onPress={() => setSelectedPet("dog")}
          >
            <View style={styles.buttonContent}>
              <MaterialCommunityIcons
                name="dog"
                size={24}
                color={selectedPet === "dog" ? "#68C2FF" : "gray"}
              />
              <Text
                style={[
                  styles.petButtonText,
                  selectedPet === "dog" && styles.selectedText,
                ]}
              >
                Dog
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Gender Selection */}
        <Text style={styles.optionText}>Select Pet's gender</Text>
        <View style={styles.genderSelection}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === "female" && styles.selectedButton,
            ]}
            onPress={() => setSelectedGender("female")}
          >
            <View style={styles.buttonContent}>
              <Foundation
                name="female-symbol"
                size={24}
                color={selectedGender === "female" ? "#68C2FF" : "gray"}
              />
              <Text
                style={[
                  styles.genderButtonText,
                  selectedGender === "female" && styles.selectedText,
                ]}
              >
                Female
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === "male" && styles.selectedButton,
            ]}
            onPress={() => setSelectedGender("male")}
          >
            <View style={styles.buttonContent}>
              <Foundation
                name="male-symbol"
                size={24}
                color={selectedGender === "male" ? "#68C2FF" : "gray"}
              />
              <Text
                style={[
                  styles.genderButtonText,
                  selectedGender === "male" && styles.selectedText,
                ]}
              >
                Male
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Pet Size Slider */}
        <Text style={styles.optionText}>Which pet size do you prefer?</Text>
        <Slider
          style={styles.slider}
          minimumValue={9}
          maximumValue={23}
          step={1}
          value={petSize}
          onValueChange={setPetSize}
          minimumTrackTintColor="#68C2FF"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#68C2FF"
        />
        <View style={styles.sliderLabelsContainer}>
          <View>
            <Text style={styles.labelText}>Small</Text>
            <Text style={styles.sliderText}>{petSize} kg</Text>
          </View>
          <View>
            <Text style={styles.labelText}>Large</Text>
            <Text style={styles.sliderText}>23 kg above</Text>
          </View>
        </View>

        {/* Personality Slider */}
        <Text style={styles.optionText}>
          What type of personality do you prefer in a pet?
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={personality}
          onValueChange={setPersonality}
          minimumTrackTintColor="#68C2FF"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#68C2FF"
        />
        <View style={styles.sliderLabelsContainer}>
          <Text style={styles.labelText}>Calm</Text>
          <Text style={styles.labelText}>Playful</Text>
        </View>

        {/* Find Pet Button */}
        <View style={styles.findPetContainer}>
          <TouchableOpacity
            style={styles.findPetButton}
            onPress={handleFindPet}
          >
            <Text style={styles.findPetButtonText}>Find My Pet</Text>
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
    alignItems: "center",
    paddingTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
  },
  backButtonContainer: {
    backgroundColor: "gray",
    borderRadius: 25,
    padding: 10,
  },
  signupText: {
    fontSize: 16,
    color: "gray",
    textAlign: "left",
    alignSelf: "flex-start",
    marginRight: 20,
    marginTop: 60,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#68C2FF",
    textAlign: "left",
    alignSelf: "flex-start",
    marginRight: 20,
    marginTop: 10,
  },
  optionText: {
    fontSize: 16,
    marginBottom: 8,
    color: "#555",
    textAlign: "left",
    alignSelf: "flex-start",
    marginRight: 20,
  },
  petSelection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 20,
  },
  petButton: {
    backgroundColor: "white",
    width: "40%",
    height: 35,
    marginTop: 20,
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  petButtonText: {
    color: "gray",
    fontSize: 16,
    textAlign: "center",
    marginLeft: 10,
  },
  genderSelection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 20,
  },
  genderButton: {
    backgroundColor: "white",
    width: "40%",
    height: 35,
    marginTop: 20,
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  genderButtonText: {
    color: "gray",
    fontSize: 16,
    textAlign: "center",
    marginLeft: 10,
  },
  slider: {
    width: "80%",
    marginTop: 5,
    marginBottom: 1,
  },
  sliderText: {
    fontSize: 15,
    color: "gray",
  },
  sliderLabelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginTop: 10,
    marginBottom: 30,
  },
  labelGroup: {
    alignItems: "center",
  },
  labelText: {
    fontSize: 13,
    color: "gray",
  },
  kgText: {
    fontSize: 13,
    color: "#555",
    marginTop: 4,
  },
  findPetContainer: {
    width: "100%",
    alignItems: "center",
  },
  findPetButton: {
    backgroundColor: "#FF7A68",
    width: "90%",
    height: 45,
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  findPetButtonText: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    borderColor: "#68C2FF",
    borderWidth: 2,
  },
  selectedText: {
    color: "#68C2FF",
  },
  selectedGenderButton: {
    borderColor: "#68C2FF",
    borderWidth: 2,
  },
  selectedGenderText: {
    color: "#68C2FF",
  },
});