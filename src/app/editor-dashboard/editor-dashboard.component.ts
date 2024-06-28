import { Component, OnInit } from '@angular/core';
import {dbDataCampaign} from '../campaigns/campaign-data';
import {CampaignService} from '../campaigns/campaign.service';
import { Router } from '@angular/router';
import { SignUpRequest } from '../dashboard/data';
import { ClientsService } from '../clients/clients.service';
import { DashboardDataService } from '../dashboard/dashboard-data.service';

@Component({
  selector: 'app-editor-dashboard',
  templateUrl: './editor-dashboard.component.html',
  styleUrls: ['./editor-dashboard.component.scss']
})
export class EditorDashboardComponent implements OnInit {
  public data:dbDataCampaign[]=[];
  filter='';
  p: number = 1;
  count: number = 10;
public Data_countClients:SignUpRequest[]=[];
public Data:SignUpRequest[]=[];
  public DataCountCallCentre:SignUpRequest[]=[];

    constructor(private DS:DashboardDataService,private CS:CampaignService,private router: Router,private CSs:ClientsService) { }
  
    ngOnInit(): void {
      this.getCampaigns();
      this.countClient();
      this.getdata();
    }
    async getCampaigns()
    {
      
     this.data=await this.CS.getCampaigns();
     console.log(this.data);
    }
    logout()
    {
      localStorage.removeItem('dataSource');
      this.router.navigate(['/login']);
    }
    async countClient()
    {
      this.Data_countClients=await this.CSs.getClients();
     console.log(this.Data_countClients.length);
  
    }
    async getdata()
    {
     this.Data=await this.DS.getUsers();
     this.DataCountCallCentre=await this.DS.getAllCallCentreUsers();
    }
}
