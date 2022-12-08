import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CartService} from './Services/cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Front_End_ITI_Final_project';
  constructor(
    public translate: TranslateService
  ) {}
}
