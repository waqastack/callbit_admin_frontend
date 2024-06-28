import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CampaignService} from '../campaigns/campaign.service';
import {dbDataCampaign} from '../campaigns/campaign-data';
import {EditUserDataService} from '../edit-user/edit-user-data.service';


@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent implements OnInit {
  compaign: dbDataCampaign[] = [];
  constructor(private bs:CampaignService,private route: ActivatedRoute,private router: Router,private EDS:EditUserDataService) { }
ngOnInit() {
    console.log('edit');
  this.getData();
  }
  getData()
  {
    this.route.params.subscribe(params => {
      this.bs.editStudent(params['id']).subscribe(res => {
        this.compaign = res as dbDataCampaign[];
      });
    });
  }
  Route()
  {
    let token=localStorage.getItem('dataSource')
    if(token==='admin')
    this.router.navigate(['/menu/campaigns']);
    if(token==='editor')
    this.router.navigate(['/editormenu/campaigns']);
  
  }
  logout()
  {
    localStorage.removeItem('dataSource');
    this.router.navigate(['/login']);
  }
}
