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
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 5,
  },
  userInfo: {
    marginTop: 20,
    color: '#FFFFFF',
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  bio: {
    marginTop: 10,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  cards: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1E21A3',
    borderRadius: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 4,
    width: '60%',
    position: 'absolute',
    top: 50,
    zIndex: 1,
    paddingTop: statusBarHeight + 10,
    marginTop: 10,
  },
  inputContainer2: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 4,
    width: '50%',
    position: 'absolute',
    top: 20,
    zIndex: 1,
    paddingTop: statusBarHeight + 10,
    marginTop: 10,
  },
  Inputcards: {
    width: 170,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C1E21A3',
    borderRadius: 6,
  },
  verifiedIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  iconContainer: {
    flexDirection: 'row', // Pour aligner l'icône et le texte horizontalement
    alignItems: 'center', // Pour centrer l'icône et le texte verticalement
    color: 'white',
    marginBottom: 5, // Marge en bas pour espacer les différents éléments
  },
  icon: {
    color: 'white',
    fontSize: 20,
    marginRight: 5,
  },
  cardsBrowser: {
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1E21A3',
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  iconRow: {
    flexDirection: 'row', // Alignement horizontal des icônes
    justifyContent: 'space-between', // Espace égal entre les icônes
    marginBottom: 10, // Marge en bas pour espacer les lignes d'icônes
  },
});