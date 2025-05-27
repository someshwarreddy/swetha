import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  users = signal<any>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  getusersUrl = 'https://dummyjson.com/users';
  adduserUrl= 'https://dummyjson.com/users/add';
  updateuserUrl = 'https://dummyjson.com/users';
  deleteuserUrl = 'https://dummyjson.com/users';

  constructor(private httpp: HttpClient) { }

  gertUsers() {
    this.loading.set(true);
    this.error.set(null);
    this.httpp.get(this.getusersUrl).subscribe({
      next: (response: any) => {
        this.users.set(response.users);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message);
        this.loading.set(false);
      }
    });
  }
  addUser(user: any) {
    this.loading.set(true);
    this.error.set(null);
    this.httpp.post(this.adduserUrl, user).subscribe({
      next: (response: any) => {
        this.users.update((users) => [...users, response]);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message);
        this.loading.set(false);
      }
    });
  }
  userUpdate(id: number, user: any) {
    this.loading.set(true);
    this.error.set(null);
    this.httpp.put(`${this.updateuserUrl}/${id}`, user).subscribe({
      next: (response: any) => {
        this.users.update((users) => users.map((u:any) => u.id === id ? response : u));
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message);
        this.loading.set(false);
      }
    });
  }
  deleteUser(id: number) {
    this.loading.set(true);
    this.error.set(null);
    this.httpp.delete(`${this.deleteuserUrl}/${id}`).subscribe({
      next: () => {
        this.users.update((users) => users.filter((u:any) => u.id !== id));
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message);
        this.loading.set(false);
      }
    });
  }
}
