import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EditUserDataService} from '../edit-user/edit-user-data.service';
import {AuthLoginService} from './auth-login.service';
import { User } from './user';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private formBuilder: FormBuilder,
    private router: Router,private EDS:EditUserDataService,private authenticationService:AuthLoginService,private toastr: ToastrService) { }
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  public Data:User[]=[];
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
   
this.login();

  }
  login()
  {
    this.spinner.show();
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .subscribe
      (result => {
        
        let data=result as User;
        if (data.type===3)
        {
          this.spinner.hide();
            this.EDS.flag=true;
            localStorage.setItem('dataSource', 'admin');
            this.router.navigate(['/menu']);
        }
        if (data.type===4) {
          this.spinner.hide();
            this.EDS.flag=true;
            localStorage.setItem('dataSource', 'editor');
            this.router.navigate(['/editormenu']);
        }
      },
      (error) => {
        this.spinner.hide();
        this.error = error;
        //this.toastr.error('Something went wrong.');
      });
      
  }
  onClickEye(){
    let element=document.getElementById('userPassword') as HTMLInputElement;
    if(element.type=="password")
    {      
      element.type="text";
    }
    else{
      element.type="password";
    } 
  }
}
