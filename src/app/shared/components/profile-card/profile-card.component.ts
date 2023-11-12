import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  profileUserName$: Observable<string>;
  profileUserNameError$: Observable<string>;

  usersService = inject(UserService);

  constructor() {
    this.profileUserName$ = this.usersService.profileUserName$;
    this.profileUserNameError$ = this.usersService.profileUserNameError$;
  }
}
