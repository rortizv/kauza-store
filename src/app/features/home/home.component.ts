import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from 'app/layout/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
