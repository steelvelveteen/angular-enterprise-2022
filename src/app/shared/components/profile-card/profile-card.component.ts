import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  profileUserName$: Observable<string>;
  profileUserNameError$: Observable<string>;

  constructor(private usersService: UsersService) {
    this.profileUserName$ = this.usersService.profileUserName$;
    this.profileUserNameError$ = this.usersService.profileUserNameError$;
  }
}
