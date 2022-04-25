import {ShoeModel} from "./shoe.model";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {CartService} from "../cart/cart.service";
import {DataStorageService} from "../shared/data-storage.service";

@Injectable()
export class ShoesService {
  shoesChanged = new Subject<ShoeModel[]>();

  private shoes: ShoeModel[] = [];

  constructor(private cartService: CartService, private dataService: DataStorageService) { }


  addProduct(product: ShoeModel){
    this.shoes.push(product);
    this.shoesChanged.next(this.shoes.slice())
    this.dataService.saveProduct(product);
  }

  loadProductsFromDb(){
    this.shoes = this.dataService.fetchProductsTest()
  }
  //////////////////////////////////////////////////////////////////////////////////////////////

  // setProducts(shoesNew: ShoeModel[]){
  //   this.shoes = shoesNew;
  //   this.shoesChanged.next(this.shoes.slice());
  // }



  updateProduct(id: number, product: ShoeModel){
    this.shoes[id] = product;
    this.shoesChanged.next(this.shoes.slice())
  }

  deleteProduct(id: number){
    //this.ingredients.splice(id, 1);
    this.shoes.splice(id, 1);
    this.shoesChanged.next(this.shoes.slice())

  }

  getProducts(){
    console.log('this is in getProducts in shoe service',this.shoes);
    return this.shoes.slice();
  }

  getProductById(id: number): ShoeModel{
    return this.shoes[id];
  }

  addProductToCart(product: ShoeModel){
    this.cartService.addIngredient(product);
  }

}
