import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOption } from '../../interfaces/filterOptions';

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

  @Output('onFilter') onFilterEmitt: EventEmitter<IFilterOption> = new EventEmitter<IFilterOption>();

  public onFilter(filterOptions: IFilterOption): void {
    this.onFilterEmitt.emit(filterOptions);
  }
}
