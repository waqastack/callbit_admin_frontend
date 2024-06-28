import { Component, OnInit } from '@angular/core';
import { Chart,ChartItem,registerables} from 'chart.js';
import { dbDataCampaign } from '../campaigns/campaign-data';
import { CampaignService } from '../campaigns/campaign.service';
import { ClientsService } from '../clients/clients.service';
import {DashboardDataService} from './dashboard-data.service';
import {SignUpRequest} from './data';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public Data:SignUpRequest[]=[];
  public DataCountCallCentre:SignUpRequest[]=[];
  public Data_countClients:SignUpRequest[]=[];
  public data:dbDataCampaign[]=[];

  filter='';
  p: number = 1;
  count: number = 10;
  countClients:number=0;
    constructor(private DS:DashboardDataService,private CS:ClientsService,private CaS:CampaignService) {
   }

  ngOnInit(): void {
    Chart.register(...registerables);
    this.getdata();
    this.countClient();
    this.countCampaigns();
    this.test()
  }
  async getdata()
  {
   this.Data=await this.DS.getUsers();
   this.DataCountCallCentre=await this.DS.getAllCallCentreUsers();
  }
  async countClient()
  {
    this.Data_countClients=await this.CS.getClients();
   console.log(this.Data_countClients.length);

  }
  async countCampaigns()
  {
    this.data=await this.CaS.getCampaigns();
    console.log(this.data.length);
  }
  DeleteUser(id:any)
  {
    this.CS.deleteStudent(id).subscribe(res => {
     this.getdata();
    });
  }
  test()
  {
    
    const canvas = <HTMLCanvasElement> document.getElementById('myChart');
    const ctx = canvas.getContext('2d') as ChartItem;
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Summited Proposal', 'Dispute ME', 'Total Revenue', 'Total Revenue'],
          datasets: [{
              label: '# of Votes',
              data: [40, 20, 20, 20],
              backgroundColor: [
                  '#E5A700',
                  '#8862BD',
                  'FF3C5F',
                  '#00B1C0'
                  
                  
              ],
              borderColor: [
              '#E5A700',
                  '#8862BD',
                  'FF3C5F',
                  '#00B1C0'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          },
// 				legend: {
//     position: "right",
//     align: "middle"
// },
      }
  });
  }

}
