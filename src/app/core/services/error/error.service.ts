import { Injectable } from '@angular/core';

interface ProblemDetails {}

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  handleProblemDetails = (pd: ProblemDetails): void => {
    console.log(pd);
  };
}
