import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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


  constructor() {}

  ngOnInit(): void {
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
}
  
