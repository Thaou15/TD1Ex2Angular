import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TD1Ex2';

  imageUrl:string="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg";
  tailleImage: number=20;

  inf:string="";

  utilisateur: any[] = [
    {"nom":"Durant", "prenom":"Charles", "email":"d.c@gmail.com", "telephone":"010203", "age":23},
   
  ]

  onClick()
  {
    console.log ("Bouton cliqué");
  }


}
