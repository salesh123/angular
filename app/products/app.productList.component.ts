import{ Component }from'@angular/core';
import { IProduct } from "./product";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    moduleId: module.id
})

export class ProductListComponent 
{
    constructor() {
        this.filterdProduct = this.products;
    }
    pageTitle:string='Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean;

    filterdProduct:any[];

    _listFilter:string;
    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        this.performFilter(value);
        this.filterdProduct = this.performFilter(value); 
        console.log(value)
    }
    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?h=350&auto=compress&cs=tinysrgb"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://static.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
        }
    ];
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }	
    toggleImage():void{
    this.showImage=!this.showImage;
    }

}