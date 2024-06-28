import { Component, OnInit } from '@angular/core';
import { CampaignRecievedAmountRsp } from './recieved-amount';
import { RecievedAmountService} from './recieved-amount.service';

@Component({
  selector: 'app-recieved-amount',
  templateUrl: './recieved-amount.component.html',
  styleUrls: ['./recieved-amount.component.scss']
})
export class RecievedAmountComponent implements OnInit {
  filter = '';
  objRsp: any;
  totalRecord: number=0;
  totalRecievedAmount : number=0;
  totalCallBitCharges: number = 0;
  totalCallCenterAmount: number = 0;
  public _campaignRecievedAmountRsp: CampaignRecievedAmountRsp[] = [];
  constructor(private _recievedAmountService: RecievedAmountService) {
    this._campaignRecievedAmountRsp = [];
    this.objRsp = null;
  }

  ngOnInit(): void {
    this.getAllRecievedAmount();
  }
  async getAllRecievedAmount() {
    this.objRsp = await this._recievedAmountService.getAllRecievedAmount();
    this.totalRecord = this.objRsp.totalRecord;
    this.totalRecievedAmount = this.objRsp.totalRecievedAmount;
    this.totalCallBitCharges = this.objRsp.totalCallBitCharges;
    this.totalCallCenterAmount = this.objRsp.totalCallCenterAmount;
    this._campaignRecievedAmountRsp = this.objRsp._campaignRecievedAmountRsp;
  }
}
