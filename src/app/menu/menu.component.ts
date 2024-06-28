import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EditUserDataService} from '../edit-user/edit-user-data.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router,private EDS:EditUserDataService) { }

  ngOnInit(): void {
    if(this.EDS.flag===true)
    {this.EDS.flag=false;
    this.router.navigate(['/menu/dashboard']);
    }
  }
  logout()
  {
    localStorage.removeItem('dataSource');
    this.router.navigate(['/login']);
  }
}
