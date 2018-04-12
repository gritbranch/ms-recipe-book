import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Paella',
      'This is a description of the paella recipe',
      'https://c1.staticflickr.com/9/8297/7892935092_a4592ab5fb_b.jpg'),
    new Recipe('Lengua Estofado',
      'This is a description of the lengua estofado recipe',
      'https://upload.wikimedia.org/wikipedia/commons/d/d0/Menudo_de_res.jpg'),
    new Recipe('Churros',
      'This is a description of the churros recipe',
      'https://c1.staticflickr.com/3/2706/5836889415_c5cd507d75_b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
