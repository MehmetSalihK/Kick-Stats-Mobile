import axios from 'axios';
// import User from './interface';

async function getUserInfo(channelName: string): Promise<null> {
  try {
    const response = await axios.get(`https://kick.com/api/v2/channels/${channelName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user information:', error);
    return null;
  }
}

export { getUserInfo };
