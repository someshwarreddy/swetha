import { Component, inject } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  userservice = inject(UserserviceService);
  users = this.userservice.users;
  loading = this.userservice.loading;
  error = this.userservice.error;
  getusers() {
    this.userservice.gertUsers();
  }
  adduser() {
    const newUser = {
      id: 0,
      firstName: 'New',
      lastName: 'User',
      email: '',

    }
    this.userservice.addUser(newUser);
  }
  updateuser(id: number) {
    const updatedUser = {
      firstName: 'Updated',
      lastName: 'User',
      email: 'swetha@gmail.com',
    }
    this.userservice.userUpdate(id, updatedUser);
  }
  deleteuser(id: number) {
    this.userservice.deleteUser(id);
  }
}
