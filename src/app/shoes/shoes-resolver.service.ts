import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ShoeModel} from "./shoe.model";
import {DataStorageService} from "../shared/data-storage.service";
import {Observable} from "rxjs";
import {ShoesService} from "./shoes.service";

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<ShoeModel[]>{
  constructor(private dataService: DataStorageService, private shoeService: ShoesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ShoeModel[]> | Promise<ShoeModel[]> | ShoeModel[] {
    const recipes = this.shoeService.getProducts();
    if (recipes.length === 0){
      return this.dataService.fet();

    } else {
      return recipes;
    }
  }

}
