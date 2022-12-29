export interface UserDetailedInfo {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  nickname: string;
  bio: string;
  birthday: string;
  children_qty: number;
  civil_state: string;
  instagram: string;
  whats_app: string;
  linkedin: string;
  city_current_id: string;
  city_born_at_id: string;
  state_current_id: string;
  state_born_at_id: string;
  company_id: string;
  occupation_id: string;
  work_field_id: string;
  skills_want: string[];
  skills_can: string[];
  hobbies: string[];
  last_access_at: string;
  profile_picture: string;
  groups: string[];
  spotify: {
    display_name: string;
    top_artist: {
      id: string;
      name: string;
      url: string;
      genres: string[];
    };
    top_genre: string;
    most_recent_saved_show: {
      id: string;
      name: string;
      url: string;
    };
  };
  badge: string;
}
