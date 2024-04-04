import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const VoteScreen = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const response = await axios.get('http://localhost:3000/candidates');
      setCandidates(response.data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  const handleVote = async (candidateId) => {
    try {
      await axios.post('https://10.0.2.2:3000/vote', { candidateId });
      // Optionally, you can refresh the candidate list after voting
      fetchCandidates();
      alert('Vote cast successfully!');
    } catch (error) {
      console.error('Error casting vote:', error);
      alert('Failed to cast vote. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vote for your Candidate</Text>
      <FlatList
        data={candidates}
        renderItem={({ item }) => (
          <View style={styles.candidateItem}>
            <Text>{item.name} - Party: {item.party}</Text>
            <Button
              title="Vote"
              onPress={() => handleVote(item.id)}
            />
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

export default VoteScreen;
