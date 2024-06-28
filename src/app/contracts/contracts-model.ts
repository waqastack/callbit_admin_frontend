export class ContractsClient
    {
        CSR: ContractSignResponse[];
        CCC:CompaignCallCenterResp[];
        CCI:CompaignContrInfoResp[];
        _contractSubmittedReponse:ContractSubmittedReponse[];
    }

export class  ContractSignResponse
    {
         ContractID:number
         CompaignID:number
         CallCenterID:number
         ClientID:number
         CompaignName:string
         ClientName:string
         CallCenterName:string
         ShiftTime:string
         StartTime:string
         EndTime:string
         TimeZone:string
         ExpectedLeads:string
         RemainingLeads:string
         Days:string
         ContractStatus:string
         btnSubmit:boolean
    }

    export class  CompaignCallCenterResp
    {
        compaignID:number
        compaignName:string
        status:string
    }


    export class  CompaignContrInfoResp
    {
        compaignID:number
        compaignName:string
        clientName:string
        activeDate:string
        escrow:string
        release:string
        remaining:string
        totalBudget:string
        timeDuration:string

    }
export class ContractSubmittedReponse
{
    SaleSubmittedID:number
    ContractID:number
    CompaignID:number
    CallCenterID:number
    ClientID:number
    ExpectedLeads:string
    isDeleted:boolean
    createdDate:Date
    SaleSUbmittedStatus:string
    comment:string
}