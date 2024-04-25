import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import User from '../api/interface';
import { styles } from '../styles/UserDetailsStyle';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import kickVerifiedIcon from '../assets/public/kickVerified.png';

type RootStackParamList = {
  UserDetails: { user: User };
};

const UserDetails: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'UserDetails'>>();
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        <Image source={{ uri: user.user.profile_pic }} style={styles.profilePic} />
      </View>

      <View style={styles.userInfo}>
        <View style={styles.Inputcards}>
          <Text style={styles.username}>{user.user.username}</Text>
          {user.user.agreed_to_terms && (
            <Image source={kickVerifiedIcon} style={styles.verifiedIcon} />
          )}
        </View>

        <Text style={styles.bio}>{user.user.bio}</Text>

        {user.user.country && <Text style={styles.text}>Country: {user.user.country}</Text>}
        {user.user.state && <Text style={styles.text}>State: {user.user.state}</Text>}
        {user.user.city && <Text style={styles.text}>City: {user.user.city}</Text>}
        

      <View style={styles.iconRow}>
        {user.user.instagram && (
          <TouchableOpacity style={styles.cardsBrowser} onPress={() => Linking.openURL(`https://instagram.com/${user.user.instagram}`)}>
            <View style={styles.cardsBrowser}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name="instagram" style={styles.icon} />
              </View>
            </View>
          </TouchableOpacity>
        )}

        {user.user.twitter && (
          <TouchableOpacity style={styles.cardsBrowser} onPress={() => Linking.openURL(`https://twitter.com/${user.user.twitter}`)}>
            <View style={styles.cardsBrowser}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name="twitter" style={styles.icon} />
              </View>
            </View>
        </TouchableOpacity>
        )}

        {user.user.youtube && (
          <TouchableOpacity style={styles.cardsBrowser} onPress={() => Linking.openURL(`https://youtube.com/${user.user.youtube}`)}>
            <View style={styles.cardsBrowser}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name="youtube" style={styles.icon} />
              </View>
            </View>
        </TouchableOpacity>
        )}

      </View>
            
      <View style={styles.iconRow}>
        {user.user.facebook && (
          <TouchableOpacity style={styles.cardsBrowser} onPress={() => Linking.openURL(`https://facebook.com/${user.user.facebook}`)}>
            <View style={styles.cardsBrowser}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name="facebook" style={styles.icon} />
              </View>
            </View>
        </TouchableOpacity>
        )}

        {user.user.discord && (
          <TouchableOpacity style={styles.cardsBrowser} onPress={() => Linking.openURL(`https://discord.gg/${user.user.discord}`)}>
            <View style={styles.cardsBrowser}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name="discord" style={styles.icon} />
              </View>
            </View>
          </TouchableOpacity>
        )}

        {user.user.tiktok && (
          <TouchableOpacity style={styles.cardsBrowser} onPress={() => Linking.openURL(`https://tiktok.com/${user.user.tiktok}`)}>
            <View style={styles.cardsBrowser}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name="tiktok" style={styles.icon} />
                <Text style={styles.text}>{user.user.tiktok}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}

      </View>
      </View>
    </View>
  );
};

export default UserDetails;
