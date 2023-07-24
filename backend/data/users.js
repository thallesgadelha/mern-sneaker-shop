import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456admin', 10),
    isAdmin: true,
  },
  {
    name: 'User User',
    email: 'user@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
