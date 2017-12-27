
import { NgModule } from "@angular/core"
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/app.productList.component";
import { ProductService } from "./products/app.productservice";

@NgModule({
imports:[BrowserModule,FormsModule],
declarations:[AppComponent,ProductListComponent],
bootstrap:[AppComponent],
providers:[ProductService]

})


export class AppModule{

}
