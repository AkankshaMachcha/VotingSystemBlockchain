import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import VoteScreen from './VoteScreen';
import ResultsScreen from './ResultsScreen';
import UserInfoScreen from './UserInfoScreen';

const Stack = createStackNavigator();

const UserDashboard = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Vote" component={VoteScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
      <Stack.Screen name="UserInfo" component={UserInfoScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default UserDashboard;
