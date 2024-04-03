import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AddCandidateScreen from './AddCandidateScreen';
import CandidateListScreen from './CandidateListScreen';
import PublishVotesScreen from './ResultsScreen';

const Stack = createStackNavigator();

const AdminDashboard = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddCandidate"
        component={AddCandidateScreen}
        options={{ title: 'Add Candidate' }}
      />
      <Stack.Screen
        name="CandidateList"
        component={CandidateListScreen}
        options={{ title: 'Candidate List' }}
      />
      <Stack.Screen
        name="PublishVotes"
        component={PublishVotesScreen}
        options={{ title: 'Publish Votes' }}
      />
    </Stack.Navigator>
  );
};

export default AdminDashboard;
