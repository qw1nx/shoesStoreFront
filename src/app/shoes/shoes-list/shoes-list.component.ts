import { Component, OnInit } from '@angular/core';
import {ShoeModel} from "../shoe.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ShoesService} from "../shoes.service";
import {DataStorageService} from "../../shared/data-storage.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.css']
})
export class ShoesListComponent implements OnInit {

  shoes!: ShoeModel[];
  subscription: Subscription = new Subscription();

  constructor(private shoesService: ShoesService,
              private router: Router,
              private route: ActivatedRoute,
              private dataService: DataStorageService) {
  }

  ngOnInit() {
    this.shoesService.loadProductsFromDb()
    this.shoes = this.shoesService.getProducts();
    this.subscription = this.shoesService.shoesChanged
      .subscribe(
        (recipes: ShoeModel[]) => {
          this.shoes = recipes;
        }
      );
    this.shoes = this.shoesService.getProducts();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }




  // actualItems:string[] = ['2','2','2','2','2','2','2','2','2'];
  //
  // groupArray(data: string[], n: number){
  //   let group = new Array();
  //   for (let i = 0, j = 0; i < data.length; i++) {
  //         if (i >= n && i % n === 0)
  //           j++;
  //         group[j] = group[j] || [];
  //         group[j].push(data[i])
  //       }
  //   return group;
  // }
  //
  // rows = this.groupArray(this.actualItems, 3);
  //
  // constructor() { }


}
