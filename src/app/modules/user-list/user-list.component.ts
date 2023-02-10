import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Result, Users } from './Interfaces/users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: Result[] = [];

  private http = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get<Users>('https://randomuser.me/api/?results=50')
      .subscribe((users: Users) => {
        this.users = users.results;
      })
  }
}
