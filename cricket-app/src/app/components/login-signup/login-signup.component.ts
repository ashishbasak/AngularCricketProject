import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/common-classes/api.service';
import { Routes, Router } from '@angular/router';


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  loginForm:FormGroup;
  isLoginHidden:boolean;
  buttonType="button";
  isPassTwoHidden:boolean;
  formTitle="Login";
  hideNewSignUpButton: boolean;
  hideOldSubmit:boolean;
  loginButtonType="submit"
  doingLogin:boolean

  constructor(private fb: FormBuilder,private apiService:ApiService,private router:Router) { 
  this.isLoginHidden=false;
  this.isPassTwoHidden=true;
  this.hideNewSignUpButton=true;
  this.hideOldSubmit=false;
  this.doingLogin=true;

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['',[Validators.required, Validators.minLength(3)]],
      password2:['',[Validators.required,Validators.minLength(3)]]
    });
  }

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get password2() {
    return this.loginForm.get('password2');
  }


  submit(){
    if(this.doingLogin==true){
    let userName=this.loginForm.controls.userName.value
    let password=this.loginForm.controls.password.value
    this.apiService.checkLogin().subscribe(data=>{
      console.log(data);
      for(let element of data){
        console.log("element.id and userName => ",element.id,userName)

        if(element.id==userName && element.password==password){
          console.log("found user")
          this.router.navigate(['/tabs']);
          return;
        }
        else{
       
          
        }
      }
      alert("user not found");
    })
  }
  else{
    console.log("signup called");
    let userName=this.loginForm.controls.userName.value
    let password=this.loginForm.controls.password.value
    let password2=this.loginForm.controls.password2.value

    if(password!=password2)
    {
      alert("passwords dont match")
      return
    }
    else{
      console.log("passwords match");
      this.apiService.checkLogin().subscribe(data=>{
        console.log("data from api is",data)
        let newUser={
          "id": userName,
          "password": password,
          "favmatches": [
            
          ]
        }

        this.apiService.addUser(newUser).subscribe(data=>{
          alert("you are successfully signed up");
        });
        
      })
    }




  }

  }

  signUpCalled(){
    this.isLoginHidden=true
    this.isPassTwoHidden=false;
    this.buttonType="button"
    this.formTitle="Sign Up"
    this.hideNewSignUpButton=false;
    this.hideOldSubmit=true;
    this.loginButtonType="button"
    this.doingLogin=false
  }

  signUpSubmit(){

  }




}
