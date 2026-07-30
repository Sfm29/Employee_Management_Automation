import { faker } from '@faker-js/faker';
import { ApiUser } from '../models/ApiUser';

export class UserFactory {

    static create(): ApiUser {

        return {
            name: faker.person.fullName(),
            email: faker.internet.email().toLowerCase()
        };

    }

}