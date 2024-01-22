enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
};

type User = {
  username: string;
  role: ROLES;
};

const lautiUser: User = {
  username: 'lautaro',
  role: ROLES.ADMIN
}
