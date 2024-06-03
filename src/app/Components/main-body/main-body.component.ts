import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../Services/Comapnies.service';
import { SelectedTab } from '../../Models/SelectedTabs.model';
import { Company } from '../../Models/Company.model';
import { TabsService } from '../../Services/Tabs.service';
import {IndexedDbService} from './../../Services/Indexed-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css'
})
export class MainBodyComponent implements OnInit {
  userData:Company[] = [];
  constructor(
    private companiesService: CompaniesService,
    private tabsService: TabsService,
    private indexedDbService:IndexedDbService,
    private router: Router
  ) { }

  ngOnInit() {
    this.indexedDbService.getAllCompaniesById(Number(localStorage.getItem('userId'))).subscribe((res:any) => {
      console.log(res)
      this.userData = res;
      
    })
}
logout() {
  localStorage.removeItem('userId')
  this.router.navigate(['/login']);
}

}
