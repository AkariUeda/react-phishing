interface UserData {
  fullName: string;
  cardCVV: number;
  cardNumber: number;
  expDate: string;
}

interface UserList {
  userList: UserData[];
}

export type { UserData, UserList };
