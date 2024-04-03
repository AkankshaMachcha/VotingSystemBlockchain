import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/component/LoginScreen';
import RegistrationScreen from './src/component/RegistrationScreen';
import UserDashboard from './src/component/UserDashboard';
import AdminDashboard from './src/component/AdminDashboard';
import CandidateListScreen from './src/component/CandidateListScreen';
import AddCandidateScreen from './src/component/AddCandidateScreen';
import UserInfoScreen from './src/component/UserInfoScreen';
import VoteScreen from './src/component/VoteScreen';
import ResultsScreen from './src/component/ResultsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="UserHome" component={UserDashboard} />
        <Stack.Screen name="AdminHome" component={AdminDashboard} />
        <Stack.Screen name="CandidateList" component={CandidateListScreen} />
        <Stack.Screen name="AddCandidate" component={AddCandidateScreen} />
        <Stack.Screen name="UserInfo" component={UserInfoScreen} />
        <Stack.Screen name="Vote" component={VoteScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
