import { Component, OnInit } from '@angular/core';
import { SendAmountCallCenterRsp } from './send-amount';
import { SendAmountService } from './send-amount.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-send-amount',
  templateUrl: './send-amount.component.html',
  styleUrls: ['./send-amount.component.scss']
})
export class SendAmountComponent implements OnInit {
  filter = '';
  objRsp: any;
  totalRecord: number = 0;
  totalAmount: number = 0;
  closeResult = '';
  id: number = 0;
  public _sendAmountCallCenterRsp: SendAmountCallCenterRsp[] = [];
  constructor(private _sendAmountService: SendAmountService, private modalService: NgbModal) {
    this._sendAmountCallCenterRsp = [];
    this.objRsp = null;
  }

  ngOnInit(): void {
    this.GetPendingSendAmount();
  }
  async GetPendingSendAmount() {
    this.objRsp = await this._sendAmountService.GetPendingSendAmount();
    this.totalRecord = this.objRsp.totalRecord;
    this.totalAmount = this.objRsp.totalAmount;
    debugger
    this._sendAmountCallCenterRsp = this.objRsp._sendAmountCallCenterRsp;
  }
  async TransferAmount() {
    this._sendAmountService.TransferAmount(this.id).subscribe(res => {
      this.GetPendingSendAmount();
    }, error => {
      this.GetPendingSendAmount();
    })
  }
  open(content: any, id: any) {
    this.id = id;
    const modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    modalRef.componentInstance.name = 'World';
  }
}
