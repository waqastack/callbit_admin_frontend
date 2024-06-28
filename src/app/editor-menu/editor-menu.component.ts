import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EditUserDataService} from '../edit-user/edit-user-data.service';
@Component({
  selector: 'app-editor-menu',
  templateUrl: './editor-menu.component.html',
  styleUrls: ['./editor-menu.component.scss']
})
export class EditorMenuComponent implements OnInit {

  constructor(private router: Router,private EDS:EditUserDataService) { }

  ngOnInit(): void {
    if(this.EDS.flag===true)
    {this.EDS.flag=false;
    this.router.navigate(['/editormenu/editorDashboard']);
    }
  }
  logout()
  {
    localStorage.removeItem('dataSource');
    this.router.navigate(['/login']);
  }  

}
