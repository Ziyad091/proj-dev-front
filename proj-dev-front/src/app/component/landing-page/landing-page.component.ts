import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Caracteristique } from '../../class/caracteristique/caracteristique';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  showCarac!: boolean;
  textCarac!: string;

  updateColor! : boolean;
  textCarac2! : string;

  caracteristiques!: Caracteristique[];

  constructor() {}

  ngOnInit(): void {
    this.caracteristiques = [];
    this.genererCaracteristique();
    // console.log(this.caracteristiques);
    
    this.showCarac = false;
    this.textCarac = "Afficher les caractéristiques";
    this.updateColor = false;
    this.textCarac2 = "Modifier la couleur des titres en rouge";
  }

  updateShowCarac() {
    console.log(this.showCarac);
    this.showCarac = !this.showCarac;
    console.log(this.showCarac);

    if(this.showCarac) {
      this.textCarac = "Masquer les caractéristiques";
    } else {
      this.textCarac = "Afficher les caractéristiques";
    }
    
  }

  updateColors() {
    console.log(this.updateColor);
    this.updateColor = !this.updateColor;
    console.log(this.updateColor);

    if(this.updateColor) {
      this.textCarac2 = "Modifier la couleur des titres en rouge";
    } else {
      this.textCarac2 = "Modifier la couleur des titres en rouge";
    }
    
  }

  genererCaracteristique() {
    let caracteristique1 = new Caracteristique("Moteur",["Type : V10 atmosphérique ","Cylindrée : 5,0 litres (4 999 cm³)","Puissance maximale : 507 chevaux (373 kW) à 7 750 tr/min ","Couple maximal : 520 Nm à 6 100 tr/min","Couple maximal : 520 Nm à 6 100 tr/min"]);
    let caracteristique2 = new Caracteristique("Performance",["Accélération 0-100 km/h : 4,7 secondes ","Vitesse maximale : 250 km/h (limitée électroniquement) ; environ 305 km/h avec le M Drivers Package","Transmission : Boîte de vitesses robotisée SMG III à 7 rapports, avec palettes au volant"]);
    this.caracteristiques.push(caracteristique1);
    this.caracteristiques.push(caracteristique2);
    
  }
}
  
