import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes: recipe[]=[
  new recipe (`دستور پخت ماکارونی`, `متن نمونه برای توضیح پخت ماکارونی به همراه مواد لازم`, `https://mashrooh.com/media/zoo/images/1-makaroni_b80c5f30fe0cde7109ee7cc46049663a.jpg`),
  new recipe (`دستور پخت قرمه سبزی`, `متن نمونه برای توضیح پخت ماکارونی به همراه مواد لازم`, `http://www.yotaab.com/%D8%A2%D8%B4%D9%BE%D8%B2%DB%8C/images/%D8%AE%D9%88%D8%B1%D8%B4-%D9%82%D9%88%D8%B1%D9%85%D9%87-%D8%B3%D8%A8%D8%B2%DB%8C.jpg`),
]
  constructor() { }

  ngOnInit() {
  }

}
