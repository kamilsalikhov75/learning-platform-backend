import { config } from 'dotenv';

config();
export const jwtConstants = {
  secret: process.env.BCRYPT_SECRET_KEY,
};
