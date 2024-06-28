import { Component, OnInit } from '@angular/core';
import {ClientsService} from './clients.service';
import {SignUpRequest} from '../dashboard/data';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public Data:SignUpRequest[]=[];
  filter='';
  p: number = 1;
  count: number = 10;
  constructor(private CS:ClientsService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getdata();
  }
  async getdata()
  {
    debugger
   this.Data=await this.CS.getClients();
   console.log(this.Data);
  }
  DeleteUser(id:any)
  {
    this.CS.deleteStudent(id).subscribe(res => {
     this.getdata();
    });
  }

}
