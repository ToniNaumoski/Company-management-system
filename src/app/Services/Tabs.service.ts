import { Injectable, inject } from "@angular/core";
import { SelectedTab } from "../Models/SelectedTabs.model";

@Injectable({ providedIn: 'root' })
export class TabsService {
    private tabs: SelectedTab[] = [];

    constructor() { }

    public AddTab(tab: SelectedTab): void {
        this.tabs.push(tab);
    }

    public GetTabs(): SelectedTab[] {
        return this.tabs;
    }

    public RemoveTab(companyId: number): void {
        this.tabs = this.tabs.filter(tab => tab.companyId !== companyId);
    }

}