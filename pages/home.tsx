import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUserInfo } from '../api/api'; // Supposons que vous avez des fonctions pour récupérer les informations des canaux
import User from '../api/interface';
import { styles } from '../styles/HomeStyle';
import { StackNavigationProp } from '@react-navigation/stack';

import kickVerifiedIcon from '../assets/public/kickVerified.png';
import searchIcon from '../assets/public/searchIcon.png';
import clearIcon from '../assets/public/x.png';
import movingImage1 from '../assets/public/404/movingImage1.png';
import movingImage2 from '../assets/public/404/movingImage2.png';
import movingImage3 from '../assets/public/404/movingImage3.png';
import movingImage4 from '../assets/public/404/movingImage4.png';
import movingImage5 from '../assets/public/404/movingImage5.png';
import movingImage6 from '../assets/public/404/movingImage6.png';

type RootStackParamList = {
  UserDetails: { user: User };
};

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'UserDetails'>;

const Home: React.FC = () => {
  const [channelName, setChannelName] = useState('');
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation<HomeNavigationProp>();

  // Fonction pour supprimer le texte du champ de texte
  const clearTextInput = () => {
    setChannelName('');
  };

  useEffect(() => {
    const searchUser = async () => {
      if (channelName.trim() !== '') {
        const info = await getUserInfo(channelName.trim());
        if (info) {
          setUserInfo(info);
          setErrorMessage('');
        } else {
          setUserInfo(null);
          setErrorMessage(`Oups, quelque chose s'est mal passé`);
        }
      } else {
        setUserInfo(null);
        setErrorMessage('');
      }
    };
    searchUser();
  }, [channelName]);

  useEffect(() => {
    if (errorMessage !== '') {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 5 ? 0 : prevIndex + 1));
      }, 1000);
  
      return () => clearInterval(interval);
    }
  }, [errorMessage]);

  const goToUserDetails = () => {
    if (userInfo) {
      navigation.navigate('UserDetails', { user: userInfo });
    }
  };

  const movingImages = [movingImage1, movingImage2, movingImage3, movingImage4, movingImage5, movingImage6];

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
        {/* Affiche l'icône "x" uniquement si du texte est saisi */}
        {channelName.trim() !== '' && (
          <TouchableOpacity onPress={clearTextInput}>
            <Image source={clearIcon} style={styles.clearIcon} />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage !== '' && (
        <View style={styles.errorMessageContainer}>
          {movingImages.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={[styles.movingImage, index === currentImageIndex ? styles.visible : styles.hidden]}
            />
          ))}
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <Text style={styles.errorMessage2}>Nous rencontrons quelques erreurs en ce moment, veuillez réessayer</Text>
        </View>
      )}
      {userInfo && errorMessage === '' && (
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
