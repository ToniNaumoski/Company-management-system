export class SelectedTab {
    companyId: number;
    companyName: string;

    constructor(
        init: Partial<SelectedTab>
    ) { Object.assign(this, init); }
}