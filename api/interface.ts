interface User {
  verified: boolean;
  is_banned: boolean;
  subscription_enabled: boolean;
  followers_count: number;
  livestream: any | null;
  user: {
    id: number;
    username: string;
    agreed_to_terms: boolean;
    email_verified_at: string;
    bio: string;
    country: string;
    state: string;
    city: string;
    instagram: string;
    twitter: string;
    youtube: string;
    discord: string;
    tiktok: string;
    facebook: string;
    profile_pic: string;
  };
}

export default User;