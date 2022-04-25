import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ShoesService} from "../shoes.service";

@Component({
  selector: 'app-shoes-edit',
  templateUrl: './shoes-edit.component.html',
  styleUrls: ['./shoes-edit.component.css']
})
export class ShoesEditComponent implements OnInit {

  id!:number;
  editMode = false;
  productForm!: FormGroup;

  constructor(private route: ActivatedRoute,
              private shoesService: ShoesService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }

  onSubmit(){
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients'],
    //   )
    // //////////////////////////////////////////////////////////////////
    // if (this.editMode){
    //   this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    // } else {
    //   this.recipeService.addRecipe(this.recipeForm.value);
    // }
    //
    // this.onCancel();
    //////////////////////////////////////////////////////////////////

    if (this.editMode){
      this.shoesService.updateProduct(this.id, this.productForm.value);
    } else {
      this.shoesService.addProduct(this.productForm.value);
    }
  }

  onAddNewSizes(){
    (<FormArray>this.productForm.get('sizes')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteSize(id: number){
    (<FormArray>this.productForm.get('sizes')).removeAt(id);
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }


  private initForm() {
    let shoeMaker = '';
    let shoeModel = '';
    let shoeGender = '';
    let shoeImage = '';
    let shoeDescription = '';
    let shoePrice = '';
    let shoeSizes = new FormArray([]);

    if (this.editMode){
      const shoeListing = this.shoesService.getProductById(this.id);
      shoeMaker = shoeListing.maker;
      shoeModel = shoeListing.model;
      shoeGender = shoeListing.gender
      shoeImage = shoeListing.imageUrl;
      shoeDescription = shoeListing.description;
      if (shoeListing['sizesAvailable']){
        for (let size of shoeListing.sizesAvailable){
          shoeSizes.push(
            new FormGroup({
              'oneSize': new FormControl(size, Validators.required)
            })
          )
        }
      }
    }
    this.productForm = new FormGroup({
      'make': new FormControl(shoeMaker, Validators.required),
      'model': new FormControl(shoeModel, Validators.required),
      'gender': new FormControl(shoeGender, Validators.required),
      'imageUrl': new FormControl(shoeImage, Validators.required),
      'description': new FormControl(shoeDescription, Validators.required),
      'price': new FormControl(shoePrice, Validators.required),
      'sizes': shoeSizes
    });
  }

  get controls() { // a getter!
    return (<FormArray>this.productForm.get('sizes')).controls;
  }

}
