import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validator,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formValues!:FormGroup
  hide:any;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {

    this.formValues=this.formbuilder.group({
      email    :['',Validators.required],
      password :['',Validators.required],


    })
  }

  // login method define
  login(){
this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
  //matching email and password
const user = res.find((a:any)=>{
  return a.email === this.formValues.value.email && a.password === this.formValues.value.password
})
//condition check for login
if(user){
  alert("sucessfully logged in")
  this.formValues.reset();
  this.router.navigate(['resturent'])
}else{
  alert("user not found with these credentials")
}
}
,err=>{
  alert("something went wrong");
}
  )

  }
}
