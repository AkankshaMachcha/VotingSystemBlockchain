// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import axios from 'axios';

// const RegistrationScreen = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [age, setAge] = useState('');
//   const [qualification, setQualification] = useState('');

//   const handleRegistration = async () => {
//     try {
//       if (username.trim() !== '' && password.trim() !== '' && age.trim() !== '' && qualification.trim() !== '') {
//         await axios.post('http://10.0.2.2:3000/api/register', {
//           username,
//           password,
//           age: parseInt(age),
//           qualification
//         });
//         // Optionally, you can navigate to the login screen after successful registration
//         navigation.navigate('Login');
//       }
//     } catch (error) {
//       console.error('Error registering user:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Registration</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Age"
//         value={age}
//         onChangeText={setAge}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Qualification"
//         value={qualification}
//         onChangeText={setQualification}
//       />
//       <Button title="Register" onPress={handleRegistration} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
// });

// export default RegistrationScreen;




import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const RegistrationScreen = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const handleRegistration = async () => {
    try {
      if (username.trim() !== '' && age.trim() !== '') {
        await axios.post('http://10.0.2.2:3000/api/votes', {
          name: username,
          age: parseInt(age)
        });
        // Optionally, you can navigate to a different screen after successful registration
        console.log('User registered successfully!');
      } else {
        alert('Please fill all the fields.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Failed to register user. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default RegistrationScreen;
