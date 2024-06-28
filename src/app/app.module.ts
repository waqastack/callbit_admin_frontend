import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientsComponent } from './clients/clients.component';
import { MenuComponent } from './menu/menu.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { EditorMenuComponent } from './editor-menu/editor-menu.component';
import { EditorDashboardComponent } from './editor-dashboard/editor-dashboard.component';
import { CallCentreComponent } from './call-centre/call-centre.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ToastrModule } from 'ngx-toastr';
import { DisputesComponent } from './disputes/disputes.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ContractsComponent } from './contracts/contracts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecievedAmountComponent } from './recieved-amount/recieved-amount.component';
import { SendAmountComponent } from './send-amount/send-amount.component';
import { CallbitAmountComponent } from './callbit-amount/callbit-amount.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ClientsComponent,
    MenuComponent,
    CampaignsComponent,
    CampaignDetailsComponent,
    EditorMenuComponent,
    EditorDashboardComponent,
    CallCentreComponent,
    EditUserComponent,
    DisputesComponent,
    ContractsComponent,
    RecievedAmountComponent,
    SendAmountComponent,
    CallbitAmountComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule, FormsModule,
    AppRoutingModule, HttpClientModule, NgxPaginationModule, NgbModule
    , Ng2SearchPipeModule, ReactiveFormsModule, NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      easing: 'ease-in',
      easeTime: 100,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
