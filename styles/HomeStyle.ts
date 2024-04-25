import { Platform, StatusBar, StyleSheet } from 'react-native';

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24272c',
    paddingTop: statusBarHeight,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: '#171c1e',
    borderRadius: 4,
    width: '60%',
    position: 'absolute',
    top: 50,
    zIndex: 1,
    paddingTop: statusBarHeight + 10,
    marginTop: 10,
  },
  input: {
    height: 30,
    color: '#FFFFFF',
    flex: 1,
    paddingTop: -10,
    top: -5,
  },
  inputTop: {
    marginTop: 5,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#171c1e',
    backgroundColor: '#171c1e',
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
    color: '#FFFFFF',
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
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
    marginTop: 2,
    tintColor: '#FFFFFFE5',
  },
  movingImage: {
    transform: [{ scale: 0.5 }],
    position: 'absolute',
  },
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
  errorMessage: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 180,
  },
  errorMessage2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    marginTop: 5,
  },
  errorMessageContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b0e0f',
    padding: 20,
  },
  clearIcon: {
    tintColor: '#FFFFFFE5',
    width: 14,
    height: 14,
    marginRight: 1,
    marginTop: 3,
  },
});
