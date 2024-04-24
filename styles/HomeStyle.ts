import { Platform, StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24272c',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  input: {
    height: 40,
    backgroundColor: "#171c1e",
    width: '60%',
    borderRadius: 2,
    color: '#FFFFFF',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputTop: {
    position: 'absolute',
    top: 70,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  userInfo: {
    marginLeft: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  followersCount: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  verifiedIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
    width: 24,
    height: 24,
    zIndex: 1,
  },
});