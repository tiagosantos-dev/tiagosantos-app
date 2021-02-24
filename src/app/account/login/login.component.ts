import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  constructor(private fb: FormBuilder, private acccountService: AccountService, private router: Router) { }
  value: any;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formLogin = this.fb.group({
      username:[],
      password:[]


    })

  }

loadForm(){
  this.acccountService.login(this.formLogin.value).subscribe(response =>{
    console.log(response)
    if(response.token){
      localStorage.setItem('token', response.token);
      this.router.navigate(['']);
    }


  },error => {
    console.error(error)

  });
 
}


}
