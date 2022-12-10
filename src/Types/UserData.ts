export interface UserData {
  email: string;
  username: string;
  accessConfig: boolean;
  accessShop: boolean;
  accessOrders: boolean;
  active?: boolean;
  img?: string;
}

// make an object of type UserData and have it be the default value for the user property
export const CreateUser = (data?: UserData) => {
  if (data)
    return {
      email:
        (data['email'] &&
          data['email'].trim() &&
          data['email'].toLowerCase()) ||
        '',
      username: (data['username'] && data['username'].trim()) || '',
      accessConfig: data['accessConfig'] || false,
      accessShop: data['accessShop'] || false,
      accessOrders: data['accessOrders'] || false,
      active: data['active'] ? data['active'] : false,
      img: (data['img'] && data['img'].trim()) || '/assets/user-default.png',
    };
  else
    return {
      email: '',
      username: '',
      accessConfig: false,
      accessShop: false,
      accessOrders: false,
      active: true,
      img: '/assets/user-default.png',
    };
};
