import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RestuarentdashComponent } from './restuarentdash/restuarentdash.component';
import { MaterialComponent } from './material/material.component';

const routes:Routes =[
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'resturent',component:RestuarentdashComponent},
  {path:'material',component:MaterialComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
