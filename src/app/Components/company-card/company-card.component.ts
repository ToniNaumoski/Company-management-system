import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Company } from '../../Models/Company.model';
import { NavigationService } from '../../Services/Navigation.service';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.css'
})
export class CompanyCardComponent {
   @Input() Company: Company = {} as Company;
  // @Output() CompanySelected = new EventEmitter<number>();
   constructor(private navigationService: NavigationService,
   ) { }

  public SelectCompany(companyId: number) {
    this.GoToPage(`${'company-data'}/${this.Company.companyId}`);
  }

  private GoToPage(page: string): void {
    this.navigationService.NavigateTo(page);
  }
}
