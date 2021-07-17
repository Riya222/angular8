import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('A test recipe', 'This is a test recipe',  'https://myrecipehampers.files.wordpress.com/2013/04/mrh-square-logo.png'),
    new Recipe('A test recipe', 'This is a test recipe',  'https://myrecipehampers.files.wordpress.com/2013/04/mrh-square-logo.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
