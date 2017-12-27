
import { NgModule } from "@angular/core"
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/app.productList.component";
import { ProductService } from "./products/app.productservice";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
imports:[BrowserModule,FormsModule,HttpClientModule],
declarations:[AppComponent,ProductListComponent],
bootstrap:[AppComponent],
providers:[ProductService]

})


export class AppModule{

}
