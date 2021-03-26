import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/interface/product.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    public category = Category;


  constructor() { }

  ngOnInit(): void {
  }

}
