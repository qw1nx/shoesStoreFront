import { Subject} from "rxjs";
import {ShoeModel} from "../shoes/shoe.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class CartService{
  cartProductsChanged = new Subject<ShoeModel[]>();

  private cartProducts:ShoeModel[] = [
    new ShoeModel(
      'adidas',
      'air-max 3',
      'male',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/75de0008-d37b-4a30-a022-1679079e3937/air-max-alpha-trainer-4-training-shoe-wPp852.png',
      100,
    'Just amazing fit for your legs with amazing ergonomics',
      ['40','41','42','43','44']
    )
  ]

  addIngredient(product: ShoeModel){
    this.cartProducts.push(product);
    this.cartProductsChanged.next(this.cartProducts.slice());
  }

  deleteIngredient(id: number){
    this.cartProducts.splice(id, 1);
    this.cartProductsChanged.next(this.cartProducts.slice())
  }

}
