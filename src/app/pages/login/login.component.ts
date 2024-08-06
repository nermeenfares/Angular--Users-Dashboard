import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected the styleUrls property
})
export class LoginComponent {
  loginObj: any = {
    name: '',
    password: ''
  };

  userService = inject(UserService);
  router = inject(Router);

  login() {
    debugger;
    this.userService.onLogin(this.loginObj).pipe(
      catchError(error => {
        // Handle the error here
        console.error('Login error:', error);
        alert('Login failed. Please try again later.');
        return of(null); // Return an observable to continue the stream
      })
    ).subscribe((res: any) => {
      if (res && res.result) {
        localStorage.setItem('userApp', JSON.stringify(res.data));
        this.router.navigateByUrl('user-list');
      } else if (res) {
        alert(res.error);
        console.log(res);
      }
    });
  }
}
