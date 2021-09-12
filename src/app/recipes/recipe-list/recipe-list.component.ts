import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[];
  constructor(private recipeService:RecipeService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
//   @Output() recipeSelected = new EventEmitter<Recipe>();
//  onRecipeSelected(recipe:Recipe){
//     this.recipeSelected.emit(recipe);
//  }
}
