import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'protractor';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  login() {

   this.authservice.login(this.model).subscribe(next => {
     console.log('Logged in successfully');
   }, error => {
     console.log('Failed to log in');
   });

  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  loogOut() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
