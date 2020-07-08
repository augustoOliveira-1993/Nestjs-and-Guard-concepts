import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {
  user: User[] = [
    { email: 'augusto.oliveira_2@hotmail.com', password: 'augustooi' },
    { email: 'Thiago.oliveira_2@hotmail.com', password: 'Spedrunn' },
    { email: 'Alan.oliveira_2@hotmail.com', password: 'Hello' },
    { email: 'Bruno.oliveira_2@hotmail.com', password: 'Cego' },
    { email: 'Guto.oliveira_2@hotmail.com', password: 'Bruno' },
    { email: 'oliveira_2@hotmail.com', password: 'Guto' },
  ];

  getAll() {
    return this.user;
  }
  getByEmail(email: string) {
    const user = this.user.find(r => r.email === email);
    return user;
  }
  create(user: User) {
    let lastEmail;
    if (this.user.length > 0) {
      lastEmail = this.user[this.user.length - 1].email;
    }
    user.email = lastEmail + 1;
    this.user.push(user);
    return user;
  }
}
