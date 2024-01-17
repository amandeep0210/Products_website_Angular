import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './mycomponents/navbar/navbar.component';
import { ProductsComponent } from './mycomponents/products/products.component';
import { FooterComponent } from './mycomponents/footer/footer.component';
import { SearchbarComponent } from './mycomponents/searchbar/searchbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ProductsComponent, FooterComponent, SearchbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first_project';
}
