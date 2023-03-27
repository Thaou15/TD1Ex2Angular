import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TD1Ex2';

  nomClasse:string="rouge";
  bouton:boolean=false;

  imageUrl:string="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg";
  tailleImage: number=20;

  inf:string="";

  utilisateur: any[] = [
    {"nom":"Durant", "prenom":"Charles", "email":"d.c@gmail.com", "telephone":"010203", "age":23},
    {"nom":"Domoinge", "prenom":"Lucas", "email":"d.l@gmail.com", "telephone":"050208", "age":22},
    {"nom":"Dupont", "prenom":"Paul", "email":"d.pa@gmail.com", "telephone":"060208", "age":18},
    {"nom":"Demont", "prenom":"Pierre", "email":"d.p@gmail.com", "telephone":"020203", "age":44},
    {"nom":"Dom", "prenom":"Marie", "email":"d.m@gmail.com", "telephone":"010203", "age":36}
   
  ]

  detailBouton:boolean=true;
  cacherDetails():void
  { 
   if(this.detailBouton)
    {
      this.detailBouton = false;
    }
    else
    {
       this.detailBouton = true;
    } 

  }

  onClick():void
  {
    console.log ("Bouton cliqué");
  }

  
  oUtil:{nom:string, prenom:string, email:string, tel:string, age:number} = 
  {"nom":"test", "prenom":"Test", "email":"Test", "tel":"test", "age":24}
  //push : pour ajouter un objet oUtil au tableau utilisateur
  ajouterUser():void
  {
    this.oUtil.nom=this.inf;
    this.utilisateur.push(this.oUtil);
  }


}
