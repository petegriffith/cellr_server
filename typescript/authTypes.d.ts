export interface UserData {
  username: string;
  password: string;
}
export interface AuthStoreContents {
  currentUser: UserData;
  userList: UserData[];
  isUserLoggedIn: boolean
}
