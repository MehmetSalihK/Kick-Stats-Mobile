import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUserInfo } from '../api/api';
import User from '../api/interface';
import { styles } from '../styles/HomeStyle';
import { StackNavigationProp } from '@react-navigation/stack';

import kickVerifiedIcon from '../assets/public/kickVerified.png';
import searchIcon from '../assets/public/searchIcon.png';

type RootStackParamList = {
  UserDetails: { user: User };
};

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'UserDetails'>;

const Home: React.FC = () => {
  const [channelName, setChannelName] = useState('');
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const navigation = useNavigation<HomeNavigationProp>();

  useEffect(() => {
    const searchUser = async () => {
      if (channelName.trim() !== '') {
        const info = await getUserInfo(channelName.trim());
        setUserInfo(info);
      }
    };
    searchUser();
  }, [channelName]);

  const goToUserDetails = () => {
    if (userInfo) {
      navigation.navigate('UserDetails', { user: userInfo });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image source={searchIcon} style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholderTextColor="#FFFFFF28"
          placeholder="Nom du canal"
          value={channelName}
          onChangeText={setChannelName}
        />
      </View>
      {userInfo && (
        <TouchableOpacity style={styles.card} onPress={goToUserDetails}>
          {userInfo.verified && (
            <Image source={kickVerifiedIcon} style={styles.verifiedIcon} />
          )}
          <Image source={{ uri: userInfo.user.profile_pic }} style={styles.profilePic} />
          <View style={styles.userInfo}>
            <Text style={styles.username}>{userInfo.user.username}</Text>
            <Text style={styles.followersCount}>Followers: {userInfo.followers_count}</Text>
            <Text style={styles.followersCount}>Live: {userInfo.livestream ? 'Oui' : 'Non'}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Home;
