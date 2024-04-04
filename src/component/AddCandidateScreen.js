// // import React, {useState} from 'react';
// // import {View, Text, TextInput, Button, StyleSheet } from 'react-native';
// // import axios from 'axios';

// // const AddCandidateScreen = () => {
// //   const [candidateName, setCandidateName] = useState('');
// //   const [party, setParty] = useState('');
// //   const [age, setAge] = useState('');
// //   const [qualification, setQualification] = useState('');

// //   const handleAddCandidate = async () => {
// //     try {
// //       if (candidateName.trim() !== '' && party.trim() !== '' && age.trim() !== '' && qualification.trim() !== '') {
// //         await axios.post('http://10.0.2.2:3000/api/candidates', {
// //           name: candidateName,
// //           party,
// //           age: parseInt(age),
// //           qualification
// //         });
// //         setCandidateName('');
// //         setParty('');
// //         setAge('');
// //         setQualification('');
// //         alert('Candidate added successfully!');
// //       } else {
// //         alert('Please fill all the fields.');
// //       }
// //     } catch (error) {
// //       console.error('Error adding candidate:', error);
// //       alert('Failed to add candidate. Please try again.');
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Add Candidate</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Candidate Name"
// //         value={candidateName}
// //         onChangeText={setCandidateName}
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Party"
// //         value={party}
// //         onChangeText={setParty}
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Age"
// //         value={age}
// //         onChangeText={setAge}
// //         keyboardType="numeric"
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Qualification"
// //         value={qualification}
// //         onChangeText={setQualification}
// //       />
// //       <Button title="Add Candidate" onPress={handleAddCandidate} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     paddingHorizontal: 20,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //   },
// //   input: {
// //     width: '80%',
// //     height: 40,
// //     borderColor: 'gray',
// //     borderWidth: 1,
// //     marginBottom: 20,
// //     paddingHorizontal: 10,
// //   },
// // });

// // export default AddCandidateScreen;



// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import axios from 'axios';

// const AddCandidateScreen = () => {
//   const [candidateName, setCandidateName] = useState('');
//   const [party, setParty] = useState('');
//   const [age, setAge] = useState('');
//   const [qualification, setQualification] = useState('');

//   const handleAddCandidate = async () => {
//     try {
//       if (candidateName.trim() !== '' && party.trim() !== '' && age.trim() !== '' && qualification.trim() !== '') {
//         await axios.post('http://10.0.2.2:3000/api/candidates', {
//           name: candidateName,
//           party: party,
//           age: parseInt(age),
//           qualification: qualification
//         });
//         setCandidateName('');
//         setParty('');
//         setAge('');
//         setQualification('');
//         alert('Candidate added successfully!');
//       } else {
//         alert('Please fill all the fields.');
//       }
//     } catch (error) {
//       console.error('Error adding candidate:', error);
//       alert('Failed to add candidate. Please try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Add Candidate</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Candidate Name"
//         value={candidateName}
//         onChangeText={setCandidateName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Party"
//         value={party}
//         onChangeText={setParty}
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
//       <Button title="Add Candidate" onPress={handleAddCandidate} />
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

// export default AddCandidateScreen;



import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const AddCandidateScreen = () => {
  const [name, setName] = useState('');
  const [party, setParty] = useState('');
  const [age, setAge] = useState('');
  const [qualification, setQualification] = useState('');

  // const axiosInstance = axios.create({
  //   baseURL: 'http://10.0.2.2:3000',
  //   timeout: 5000, // Timeout in milliseconds
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  const handleAddCandidate = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/candidates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          party,
          age: parseInt(age),
          qualification,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add candidate');
      }
  
      console.log('Candidate added successfully');
      // Optionally, you can navigate to another screen or show a success message
    } catch (error) {
      console.error('Error adding candidate:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Candidate</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Party"
        value={party}
        onChangeText={setParty}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Qualification"
        value={qualification}
        onChangeText={setQualification}
      />
      <Button
        title="Add Candidate"
        onPress={handleAddCandidate}
      />
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
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddCandidateScreen;

