import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Main = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: {
          backgroundColor: '#68C2FF', // Bottom bar background color
          borderTopWidth: 0, // Remove border for a cleaner look
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="paw" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Track"
        options={{
          title: 'Track',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="truck" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="List"
        options={{
          title: 'List Pet',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notification"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Main;
