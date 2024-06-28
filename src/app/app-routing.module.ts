import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { ClientsComponent } from './clients/clients.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { EditorMenuComponent } from './editor-menu/editor-menu.component';
import { EditorDashboardComponent } from './editor-dashboard/editor-dashboard.component';
import { CallCentreComponent } from './call-centre/call-centre.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DisputesComponent } from './disputes/disputes.component';
import { ContractsComponent } from './contracts/contracts.component';
import { RecievedAmountComponent } from './recieved-amount/recieved-amount.component';
import { CallbitAmountComponent } from './callbit-amount/callbit-amount.component';
import { SendAmountComponent } from './send-amount/send-amount.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
    children:
      [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'clients', component: ClientsComponent },
        { path: 'campaigns', component: CampaignsComponent },
        { path: 'call-centre', component: CallCentreComponent },
        { path: 'contracts', component: ContractsComponent },
        { path: 'disputes', component: DisputesComponent },
        { path: 'campaigns/details/:id', component: CampaignDetailsComponent },
        { path: 'clients/edit/:id', component: EditUserComponent },
        { path: 'campaignamount', component: RecievedAmountComponent },
        { path: 'callbitamount', component: CallbitAmountComponent },
        { path: 'sendamount', component: SendAmountComponent }
      ]
  },
  {
    path: 'editormenu',
    component: EditorMenuComponent,
    children:
      [{ path: 'editorDashboard', component: EditorDashboardComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'campaigns', component: CampaignsComponent },
      { path: 'call-centre', component: CallCentreComponent },
      { path: 'contracts', component: ContractsComponent },
      { path: 'disputes', component: DisputesComponent }, {
        path: 'campaigns/details/:id',
        component: CampaignDetailsComponent
      },
      {
        path: 'clients/edit/:id',
        component: EditUserComponent
      }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
