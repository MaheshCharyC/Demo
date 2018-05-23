import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  onSubmit(event){
    event.preventDefault();
    console.log(event);
    console.log(event.target[0].value);
    let user = event.target[0].value;
    let password = event.target[1].value;
    if(user=='admin' && password=='admin'){
      this.router.navigate(['dashboard']);
    }
  }
}
