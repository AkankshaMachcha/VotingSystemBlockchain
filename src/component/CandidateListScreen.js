// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import axios from 'axios';

// const CandidateListScreen = () => {
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
//       <Text style={styles.title}>Candidate List</Text>
//       <FlatList
//         data={candidates}
//         renderItem={({ item }) => (
//           <View style={styles.candidateItem}>
//             <Text>{item.name} - Party: {item.party}</Text>
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

// export default CandidateListScreen;


import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const CandidateListScreen = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const response = await axios.get('http://localhost:3000/candidates'); // Updated URL
      setCandidates(response.data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Candidate List</Text>
      <FlatList
        data={candidates}
        renderItem={({ item }) => (
          <View style={styles.candidateItem}>
            <Text>{item.name} - Party: {item.party}</Text>
            <Text>Votes: {item.voteCount}</Text> {/* Display vote count */}
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  candidateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
});

export default CandidateListScreen;
