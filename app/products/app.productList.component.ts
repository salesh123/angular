import{ Component }from'@angular/core';
import { IProduct } from "./product";
import { ProductService } from "./app.productservice";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    moduleId: module.id
})

export class ProductListComponent 
{

    pageTitle:string='Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean;
    products:any[];
    filterdProduct:any[];
    _listFilter:string;
    //constructor() {
    //this.filterdProduct = this.products;
    //}

    constructor(private _ProductService:ProductService) {
        
    this.filterdProduct = this.products =_ProductService.getProducts();
    this._listFilter='cart';
    }

    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        this.filterdProduct = this._ProductService.getProducts();
        this.products = this._ProductService.getProducts();
        //this.performFilter(value);
      this.filterdProduct = this.performFilter(value); 
       
        console.log(value)
    }
    //products: IProduct[];

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }	
    toggleImage():void{
    this.showImage=!this.showImage;
    }

}