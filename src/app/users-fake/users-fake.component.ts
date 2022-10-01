import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users-fake',
  templateUrl: './users-fake.component.html',
})
export class UsersFakeComponent implements OnInit {
  data: any;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(data => {
      this.data = data;
      // eslint-disable-next-line no-console
      console.log(data);
    });
  }
}
