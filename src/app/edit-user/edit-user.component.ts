import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EditUserDataService} from './edit-user-data.service';
import { SignUpRequest } from '../dashboard/data';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public Data:any;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,private router: Router,private EDS:EditUserDataService) { 
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required]
    });
    this.Data=new SignUpRequest();
  }
  loginForm: FormGroup;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.EDS.editStudent(params['id']).subscribe(res => {
        this.Data = res;
      });
    });
    console.log(this.Data);
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
  this.changePassowrd();
  }
  changePassowrd()
  {
    
    this.Data[0].password=this.f.password.value;
    this.route.params.subscribe(params => {
      this.EDS.updateStudent(this.Data,parseInt(params['id']));
    });
    let token=localStorage.getItem('dataSource')
    if(token==='admin')
    this.router.navigate(['/menu/clients']);
    if(token==='editor')
    this.router.navigate(['/editormenu/clients']);
  }
  back()
  {    let token=localStorage.getItem('dataSource')
  if(token==='admin')
  this.router.navigate(['/menu/clients']);
  if(token==='editor')
  this.router.navigate(['/editormenu/clients']);
  }
}
