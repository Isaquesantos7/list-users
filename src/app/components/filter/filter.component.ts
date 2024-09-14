import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  protected filterOptions = {
    name: '',
    startDate: undefined,
    endDate: undefined,
    status: undefined
  };

  protected statusList = [
    {
      description: 'Ativo',
      value: true
    },
    {
      description: 'Inativo',
      value: false
    }
  ]

  public onFilter(): void {
    console.log(this.filterOptions);
  }
}
