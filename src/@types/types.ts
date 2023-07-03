export type User = {
  name: string;
  email: string;
  password: undefined;
  photo: string;
  role: string;
};

export type ResponseLoginData = {
  user: User;
  token: string;
};
