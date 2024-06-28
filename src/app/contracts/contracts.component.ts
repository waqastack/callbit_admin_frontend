import { Component, OnInit } from '@angular/core';
import {ContractsService} from './contracts.service';
import {ContractsClient, ContractSignResponse, ContractSubmittedReponse} from './contracts-model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  filter='';
  p: number = 1;
  count: number = 10;
  DataCountCallCentre:ContractsClient[];
  ContractsResponse:ContractSubmittedReponse[];
  ContractsResponseSign:ContractSignResponse[];
  respData:any;
  closeResult = '';
  constructor(private CS:ContractsService,private modalService: NgbModal) {
    this.DataCountCallCentre=new Array<ContractsClient>();
    this.ContractsResponse=new Array<ContractSubmittedReponse>();
    this.ContractsResponseSign=new Array<ContractSignResponse>();

   }

ngOnInit(){
    this.Getall();

  }
async Getall()
{
  const data=await this.CS.getAllContracts();
  console.log(data);
  let temp:ContractSubmittedReponse;
  let tempCSR:ContractSignResponse;
  for(let i=0;i<data._contractSubmittedReponse.length;i++)
  {
    temp=new ContractSubmittedReponse();
    temp.CallCenterID=data._contractSubmittedReponse[i].callCenterID;
    temp.ClientID=data._contractSubmittedReponse[i].clientID;
    temp.comment=data._contractSubmittedReponse[i].comment;
    temp.CompaignID=data._contractSubmittedReponse[i].compaignID;
    temp.ContractID=data._contractSubmittedReponse[i].contractID;
    temp.createdDate=data._contractSubmittedReponse[i].createdDate;
    temp.ExpectedLeads=data._contractSubmittedReponse[i].expectedLeads;
    temp.isDeleted=data._contractSubmittedReponse[i].isDeleted;
    temp.SaleSUbmittedStatus=data._contractSubmittedReponse[i].saleSUbmittedStatus;
    temp.SaleSubmittedID=data._contractSubmittedReponse[i].saleSubmittedID;
    this.ContractsResponse.push(temp);
  }
  for(let i=0;i<data.csr.length;i++)
  {
    tempCSR=new ContractSignResponse();
    tempCSR.CallCenterID=data.csr[i].callCenterID;
    tempCSR.CallCenterName=data.csr[i].callCenterName;
    tempCSR.ClientID=data.csr[i].clientID;
    tempCSR.ClientName=data.csr[i].clientName;
    tempCSR.CompaignID=data.csr[i].compaignID;
    tempCSR.CompaignName=data.csr[i].compaignName;
    tempCSR.ContractID=data.csr[i].contractID;
    tempCSR.ContractStatus=data.csr[i].contractStatus;
    tempCSR.Days=data.csr[i].days;
    tempCSR.ExpectedLeads=data.csr[i].expectedLeads;
    tempCSR.RemainingLeads=data.csr[i].remainingLeads;
    tempCSR.ShiftTime=data.csr[i].shiftTime;
    tempCSR.StartTime=data.csr[i].startTime;
    tempCSR.TimeZone=data.csr[i].timeZone;
    this.ContractsResponseSign.push(tempCSR);
  }
  debugger
}

open(content:any,CompaignID:number) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });

 this.respData= this.ContractsResponseSign.filter(x=>x.CompaignID==CompaignID);
  console.log(this.respData);
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
}
