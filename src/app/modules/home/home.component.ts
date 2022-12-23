import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  inputText: string = '';
  inputText2: string = '';
  code: string = `
<button
  type="button"
  (click)="handleInput(inputRef.value)"
>
  Click me
</button>
<p>{{ inputText }}</p>
  `;
  code2: string = `
<input #inputRef2 [(ngModel)]="inputText2" type="text" />
<p>{{ inputText2 }}</p>
  `;

  handleInput = (value: string) => {
    // eslint-disable-next-line no-console
    console.log(value);
    this.inputText = value;
  };
}
