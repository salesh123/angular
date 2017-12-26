import { Component } from "@angular/core";

@Component({
    selector:'pm-root',
    template:`
            <div>
          <h2>{{pageTitle}}</h2>
          <pm-products></pm-products></div>
           `,
      moduleId: module.id
    }

)
export class AppComponent{
  //name: String ="Capgemini"
pageTitle:string='Acme Product Management';
}