import { Component } from '@angular/core';
import { HeaderComponent } from 'app/layout/header/header.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export default class DetailsComponent {

}
