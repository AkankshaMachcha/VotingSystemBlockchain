// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import axios from 'axios';

// const ResultsScreen = () => {
//   const [candidates, setCandidates] = useState([]);

//   useEffect(() => {
//     fetchCandidates();
//   }, []);

//   const fetchCandidates = async () => {
//     try {
//       const response = await axios.get('http://10.0.2.2:3000/api/candidates');
//       setCandidates(response.data);
//     } catch (error) {
//       console.error('Error fetching candidates:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Election Results</Text>
//       <FlatList
//         data={candidates}
//         renderItem={({ item }) => (
//           <View style={styles.candidateItem}>
//             <Text>{item.name}</Text>
//             <Text>Votes: {item.voteCount}</Text>
//           </View>
//         )}
//         keyExtractor={(item) => item.id.toString()}
//       />
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
//   candidateItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 10,
//   },
// });

// export default ResultsScreen;



import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const ResultsScreen = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3000/api/results');
      setCandidates(response.data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Election Results</Text>
      <FlatList
        data={candidates}
        renderItem={({ item }) => (
          <View style={styles.candidateItem}>
            <Text style={styles.candidateName}>{item.name}</Text>
            <Text style={styles.voteCount}>Votes: {item.voteCount}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
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
    backgroundColor: '#f0f0f0', // Set background color to light gray
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue', // Set title color to blue
  },
  candidateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  candidateName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green', // Set candidate name color to green
  },
  voteCount: {
    fontSize: 16,
    color: 'red', // Set vote count color to red
  },
});

export default ResultsScreen;
