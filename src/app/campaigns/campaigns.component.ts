import { Component, OnInit } from '@angular/core';
import { dbDataCampaign } from '../campaigns/campaign-data';
import { CampaignService } from '../campaigns/campaign.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  public data: dbDataCampaign[] = [];
  filter = '';
  p: number = 1;
  count: number = 10;
  id: number = 0;
  constructor(private CS: CampaignService, private router: Router, private spinner: NgxSpinnerService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getdata();
  }
  async getdata() {
    this.spinner.show();
    this.data = await this.CS.getCampaigns();
    this.spinner.hide();
    console.log(this.data);
  }
  DeleteCampaign() {
    this.spinner.show();
    this.CS.deleteCampaign(this.id).subscribe(res => {
      debugger
      let abcData = res;
    });
    this.getdata();
  }
  openDeletePopup(content: any, id: number) {
    this.id = id;
    const modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    modalRef.componentInstance.name = 'World';
  }
  logout() {
    localStorage.removeItem('dataSource');
    this.router.navigate(['/login']);
  }
}
