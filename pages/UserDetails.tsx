import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import  User from '../api/interface';

type RootStackParamList = {
  UserDetails: { user: User };
};

const UserDetails: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'UserDetails'>>();
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.user.profile_pic }} style={styles.profilePic} />
      <View style={styles.userInfo}>
        <Text style={styles.username}>{user.user.username}</Text>
        <Text style={styles.bio}>{user.user.bio}</Text>
      </View>
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
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {
    marginTop: 10,
    textAlign: 'center',
  },
});

export default UserDetails;
