import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validator,FormControl, Validators} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { ResturentData } from './resturent.model';


@Component({
  selector: 'app-restuarentdash',
  templateUrl: './restuarentdash.component.html',
  styleUrls: ['./restuarentdash.component.css']
})
export class RestuarentdashComponent implements OnInit {

  formValue!:FormGroup
  restaurentModelObj:ResturentData = new ResturentData;
  allResturentData!:any;
  
  //button disabes add & update
  showadd!:boolean;
  showbtn!:boolean;


  constructor(private formbuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    //alert("hello welcome to Our page")
    this.formValue=this.formbuilder.group({
      name     : ['',Validators.required],
      email    :['',Validators.required],
      mobile   :['',Validators.required],
      address  :['',Validators.required],
      services :['',Validators.required],
    })
    this.getAlldata()    // to rendeer on screen data

  }

clickaddresto(){
  this.formValue.reset();
  this.showadd=true;
  this.showbtn=false; //update
}

//now subscribe our data via services 

addRest(){
  this.restaurentModelObj.name      =this.formValue.value.name;
  this.restaurentModelObj.email     =this.formValue.value.email;
  this.restaurentModelObj.mobile    =this.formValue.value.mobile;
  this.restaurentModelObj.address   =this.formValue.value.address;
  this.restaurentModelObj.services  =this.formValue.value.services;

//subscribe

this.api.postResturent(this.restaurentModelObj).subscribe(res=>{
 // console.log(res);
  alert("record added sucessfully");
//clear fill form
let ref= document.getElementById('clear');
ref?.click();


  this.formValue.reset()
  this.getAlldata();  // when we create data before refresh it should render no need to refresh on adding
},
err=>{
  alert("something went wrong!!!");
}
)

}

// get all data render on screen

getAlldata(){
  this.api.getResturent().subscribe(res=>{
this.allResturentData = res;
  })
}


//delete method to delete records

deleteResto(data:any){
  if(confirm('Are you sure to delete record ?'))    // alert
  this.api.deleteResturent(data.id).subscribe(res=>{
    alert("record deleted sucessfully")                 // alert
    this.getAlldata();                  // latest data before refresh
  })
}

// edit method

oneditresto(data:any){
this.restaurentModelObj.id = data.id

this.showadd=false; //add hide
this.showbtn=true;//update



  this.formValue.controls['services'].setValue(data.services);
  this.formValue.controls['address'].setValue(data.address); // on edit it takes data
  this.formValue.controls['email'].setValue(data.email);
  this.formValue.controls['mobile'].setValue(data.mobile);
  this.formValue.controls['name'].setValue(data.name);    

}

// update on edit

updateRest(){
  this.restaurentModelObj.name      =this.formValue.value.name;
  this.restaurentModelObj.email     =this.formValue.value.email;
  this.restaurentModelObj.mobile    =this.formValue.value.mobile;
  this.restaurentModelObj.address   =this.formValue.value.address;
  this.restaurentModelObj.services  =this.formValue.value.services;

this.api.updateResturent(this.restaurentModelObj,this.restaurentModelObj.id).subscribe(res=>{
  alert("updated sucessfully")
  this.formValue.reset()
  this.getAlldata();  // when we create data before refresh it should render no need to refresh on adding

},
err=>{
  alert("something went wrong!!!");
})
}







}
