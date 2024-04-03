// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import axios from 'axios';

// const UserInfoScreen = () => {
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     fetchUserInfo();
//   }, []);

//   const fetchUserInfo = async () => {
//     try {
//       const response = await axios.get('http://10.0.2.2:3000/api/votes'); // Change the URL to match your API endpoint
//       setUserInfo(response.data);
//     } catch (error) {
//       console.error('Error fetching user information:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>User Information</Text>
//       {userInfo && (
//         <View style={styles.userInfoContainer}>
//           <Text>Name: {userInfo.name}</Text>
//           <Text>Email: {userInfo.email}</Text>
//           {/* Add more user information components here */}
//         </View>
//       )}
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
//   userInfoContainer: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     padding: 10,
//     borderRadius: 5,
//   },
// });

// export default UserInfoScreen;



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const UserInfoScreen = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3000/api/votes'); // Change the URL to match your user information endpoint
      setUserInfo(response.data);
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Information</Text>
      {userInfo && (
        <View style={styles.userInfoContainer}>
          <Text>Name: {userInfo.name}</Text>
          <Text>Age: {userInfo.age}</Text>
          {/* Add more user information components here */}
        </View>
      )}
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
  userInfoContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
});

export default UserInfoScreen;
