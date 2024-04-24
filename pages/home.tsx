import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUserInfo, getAllLiveChannels } from '../api/api'; // Supposons que vous avez des fonctions pour récupérer les informations des canaux
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
  const [liveChannels, setLiveChannels] = useState<User[]>([]); // Un tableau pour stocker les informations des canaux en direct
  const navigation = useNavigation<HomeNavigationProp>();

  useEffect(() => {
    // Appel de la fonction pour récupérer tous les canaux en direct
    const fetchLiveChannels = async () => {
      const liveChannelsData = await getAllLiveChannels(); // Supposons que cette fonction retourne une liste d'utilisateurs en direct
      setLiveChannels(liveChannelsData);
    };

    fetchLiveChannels();
  }, []); // Appel une seule fois lors du chargement initial

  useEffect(() => {
    const searchUser = async () => {
      if (channelName.trim() !== '') {
        const info = await getUserInfo(channelName.trim());
        setUserInfo(info);
      } else {
        setUserInfo(null);
      }
    };
    searchUser();
  }, [channelName]);

  const goToUserDetails = (user: User) => {
    navigation.navigate('UserDetails', { user });
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
      {/* Affichage de tous les canaux en direct */}
      {liveChannels.map((user, index) => (
        <TouchableOpacity key={index} style={styles.card} onPress={() => goToUserDetails(user)}>
          {user.verified && (
            <Image source={kickVerifiedIcon} style={styles.verifiedIcon} />
          )}
          {/* Supposons que vous affichiez également la photo de profil de l'utilisateur */}
          <Image source={{ uri: user.user.profile_pic }} style={styles.profilePic} />
          <View style={styles.userInfo}>
            <Text style={styles.username}>{user.username}</Text>
            <Text style={styles.followersCount}>Followers: {user.followers_count}</Text>
            <Text style={styles.followersCount}>Live: Oui</Text> {/* Supposons que tous les canaux dans liveChannels sont en direct */}
          </View>
        </TouchableOpacity>
      ))}
      {/* Affichage des informations du canal saisi */}
      {userInfo && (
        <TouchableOpacity style={styles.card} onPress={() => goToUserDetails(userInfo)}>
          {userInfo.verified && (
            <Image source={kickVerifiedIcon} style={styles.verifiedIcon} />
          )}
          {/* Supposons que vous affichiez également la photo de profil de l'utilisateur */}
          <Image source={{ uri: userInfo.user.profile_pic }} style={styles.profilePic} />
          <View style={styles.userInfo}>
            <Text style={styles.username}>{userInfo.username}</Text>
            <Text style={styles.followersCount}>Followers: {userInfo.followers_count}</Text>
            <Text style={styles.followersCount}>Live: {userInfo.livestream ? 'Oui' : 'Non'}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Home;
