import { User } from '../models/LoginUser';

export const Users = {
    admin: {
        username: process.env.ORANGE_USERNAME!,
        password: process.env.ORANGE_PASSWORD!
    } as User
};