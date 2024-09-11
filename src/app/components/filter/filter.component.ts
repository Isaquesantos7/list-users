import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  protected options = [
    {
      value: true,
      viewValue: 'Sim'
    },
    {
      value: false,
      viewValue: 'Não'
    }
  ]
}
