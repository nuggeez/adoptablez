import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity } from 'react-native';
import { useTheme, TextInput, Checkbox, HelperText } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

export default function Login({navigation}) {
  const theme = useTheme();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleEmailChange = (text) => {
    setUserData({ ...userData, email: text });
    if (text === "") {
      setEmailError("");
    } else if (!validateEmail(text)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handlePasswordChange = (text) => {
    setUserData({ ...userData, password: text });
    if (text === "") {
      setPasswordError("");
    } else if (text.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = () => {
    // Add your authentication logic here
    navigation.navigate('Feed');
  };

  const handleSignup = () => {
    // Add your authentication logic here
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={[styles.logoContainer, { backgroundColor: theme.colors.primary }]}>
            <Image
              source={require('../assets/Login/loginPawImage.png')}
              style={styles.loginPawImage}
              resizeMode='cover'
            />
            <Text style={styles.welcomeBackText}>Welcome Back!</Text>
            <Text style={styles.loginText}>Login to your account</Text>
          </View>

          <View style={[styles.formContainer, { backgroundColor: theme.colors.primary }]}>
            <View style={[styles.inputContainer, { backgroundColor: theme.colors.primary }]}>
              <TextInput
                label="Email"
                value={userData.email}
                onChangeText={handleEmailChange}
                left={<TextInput.Icon icon="email" />}
                mode='flat'
                activeUnderlineColor='gray'
                style={styles.input}
              />
              <HelperText type="error" visible={!!emailError} style={styles.errorText}>
                {emailError}
              </HelperText>

              <TextInput
                label="Password"
                value={userData.password}
                onChangeText={handlePasswordChange}
                secureTextEntry={!passwordVisible}
                right={
                  <TextInput.Icon
                    icon={passwordVisible ? "eye" : "eye-off"}
                    color='black'
                    onPress={() => setPasswordVisible(!passwordVisible)}
                  />
                }
                left={<TextInput.Icon icon="lock" />}
                mode='flat'
                activeUnderlineColor='gray'
                style={styles.input}
              />
              <HelperText type="error" visible={!!passwordError} style={styles.errorText}>
                {passwordError}
              </HelperText>
            </View>

            <View style={styles.rememberForgotContainer}>
              <View style={styles.checkboxContainer}>
                <TouchableOpacity style={styles.rememberCheck} onPress={handleRememberMe}>
                  <Checkbox
                    status={rememberMe ? 'checked' : 'unchecked'}
                    onPress={handleRememberMe}
                    color='gray'
                    uncheckedColor='gray'
                  />
                  <Text style={styles.rememberText}>Remember me</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.noAccountContainer}>
            <Text style={styles.noAccountText}>Don't have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.signupButtonText} onPress={handleSignup}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  loginPawImage: {
    height: 250,
    width: 760,
  },
  welcomeBackText: {
    fontSize: 50,
    fontFamily: 'Lilita',
    color: '#68C2FF',
    marginTop: -20,
  },
  loginText: {
    fontFamily: 'Lato',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 40,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  inputContainer: {
    width: '90%',
  },
  input: {
    backgroundColor: '#F3F3F3',
  },
  errorText: {
    backgroundColor: '#FFEEED',
    marginBottom: 10,
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: -10,
  },
  rememberCheck: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    marginLeft: -8,
  },
  rememberText: {
    fontFamily: 'Lato',
    color: 'gray',
  },
  forgotText: {
    fontFamily: 'Lato',
    color: 'gray',
  },
  loginButton: {
    width: '90%',
    backgroundColor: '#EF5B5B',
    marginTop: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  loginButtonText: {
    fontFamily: 'Lato',
    fontSize: 16,
    color: 'white',
  },
  noAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginTop: 20,
    paddingHorizontal: 100,
  },
  noAccountText: {
    fontFamily: 'Lato',
  },
  signupButtonText: {
    fontFamily: 'Lato',
    color: 'gray',
    marginLeft: 10,
  },
});
