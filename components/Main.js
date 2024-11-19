import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native-paper';

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#68C2FF',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: styles.tabBarStyle, 
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = 'paw';
          } else if (route.name === 'Track') {
            iconName = 'truck';
          } else if (route.name === 'List') {
            iconName = 'plus-circle-outline';
          } else if (route.name === 'Notification') {
            iconName = 'bell';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Track" component={TrackScreen} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Feed!</Text>
    </View>
  );
}

function TrackScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Track!</Text>
    </View>
  );
}

function ListScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">List Pet!</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Notification!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Profile!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#68C2FF', // Bottom bar background color
    borderTopWidth: 0, // Remove border for a cleaner look
  },
});
