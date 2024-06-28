import { Component, OnInit } from '@angular/core';
import { dbDataCampaign } from '../campaigns/campaign-data';
import { ClientsService } from '../clients/clients.service';
import {DashboardDataService} from '../dashboard/dashboard-data.service';
import {SignUpRequest} from '../dashboard/data';

@Component({
  selector: 'app-call-centre',
  templateUrl: './call-centre.component.html',
  styleUrls: ['./call-centre.component.scss']
})
export class CallCentreComponent implements OnInit {
  public Data:SignUpRequest[]=[];

  filter='';
  p: number = 1;
  count: number = 10;
  countClients:number=0;
    constructor(private DS:DashboardDataService,private CS:ClientsService) {
   }

  ngOnInit(): void {
    this.getdata();
  }
  async getdata()
  {
   this.Data=await this.DS.getAllCallCentreUsers();
   console.log(this.Data);
  }

  DeleteUser(id:any)
  {
    this.CS.deleteStudent(id).subscribe(res => {
     this.getdata();
    });
  }

}
