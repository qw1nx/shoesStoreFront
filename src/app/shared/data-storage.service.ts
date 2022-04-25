import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {ShoeModel} from "../shoes/shoe.model";
import {map, pipe} from "rxjs";

@Injectable({providedIn: 'root'})
export class DataStorageService {

  private dataFromDb:any;

private url:string = 'http://localhost:3030'
  constructor(
    private http: HttpClient,
    private authService: AuthService) {}

  // saveProducts(){
  //   const recipes = this.shoesService.getProducts();
  //   this.http.put(this.url + '/catalog', recipes).subscribe(response => {
  //     console.log(response);
  //   });
  // }
  //
  // saveOneProduct(product: ShoeModel){
  // this.http.post(this.url + '/catalog', product).subscribe(response => {
  //   console.log(response);
  // })
  // }

  saveProduct(product: ShoeModel){
    this.http.post(this.url + '/catalog', product).subscribe(response => {
      console.log(response);
    })
  }

  fetchProductsTest(){
    this.http.get(this.url + '/catalog').subscribe(response => {
      this.dataFromDb = response;
    })
    return this.dataFromDb;
  }

  // fetchProducts(){
  //   return this.http.get(this.url + '/catalog').subscribe((response:ShoeModel[]) => {
  //     this.shoesService.setProducts(response)
  //   })
  // }
  // fetchRecipes() {
  //   return this.authService.user.pipe(
  //     take(1),
  //     exhaustMap((user: UserModel) => {
  //       return this.http.get<Recipe[]>(
  //         'https://ng-recipe-book-d54ef-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
  //         {
  //           params: new HttpParams().set('auth', user.token)
  //         }
  //       );
  //     }),
  //     map((recipes:Recipe[]) => {
  //       return recipes.map(recipe => {
  //         return {
  //           ...recipe,
  //           ingredients: recipe.ingredients ? recipe.ingredients : []
  //         };
  //       });
  //     }),
  //     tap((recipes: Recipe[]) => {
  //       this.recipeService.setRecipes(recipes);
  //     })
  //   );
  //
  // }

}
