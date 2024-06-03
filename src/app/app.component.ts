import { Component } from '@angular/core';
import { CompaniesService } from './Services/Comapnies.service';
import { TabsService } from './Services/Tabs.service';
import { SelectedTab } from './Models/SelectedTabs.model';
import { NavigationService } from './Services/Navigation.service';
import { Company } from './Models/Company.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title: string = 'TestingAngular';

  constructor(
    // private companiesService: CompaniesService,
    // private tabsService: TabsService,
    // private navigationService: NavigationService,
  ) { }

  // get Tabs(): SelectedTab[] {
  //   return this.tabsService.GetTabs();
  // }

  // get Companies(): Company[] {
  //   return this.companiesService.GetAllComplanies();
  // }

  // public RemoveTab(companyId: number): void {
  //   this.tabsService.RemoveTab(companyId);
  // }

  // public GoToPage(page: string): void {
  //   this.navigationService.NavigateTo(page);
  // }

  // public UpdateFileAndGoToPage(page: string, companyId: number): void {
  //   CompaniesService.mainFileCompany = this.companiesService.GetAllComplanies().filter((x: Company) => x.companyId === companyId)[0];
  //   this.GoToPage(page);
  // }
}