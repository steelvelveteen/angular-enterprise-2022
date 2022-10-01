import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserfakesingleService } from './userfakesingle.service';

@Component({
  selector: 'app-userfakesingle',
  templateUrl: './userfakesingle.component.html',
  styles: [],
})
export class UserfakesingleComponent implements OnInit {
  user: any;

  constructor(private userSingleService: UserfakesingleService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    // eslint-disable-next-line prefer-destructuring
    const id = this.router.snapshot.params['id'];
    this.userSingleService.getUserById(id).subscribe(data => {
      // eslint-disable-next-line no-console
      console.log(data);
      this.user = data;
    });
  }
}
