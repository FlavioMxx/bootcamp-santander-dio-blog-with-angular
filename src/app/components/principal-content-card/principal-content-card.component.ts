import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-content-card',
  templateUrl: './principal-content-card.component.html',
  styleUrls: ['./principal-content-card.component.css']
})
export class PrincipalContentCardComponent implements OnInit {
  image: string = "../../../assets/images/retrato-de-um-astronauta-em-fato-espacial-fazendo-uma-atividade-comum-ao-ar-livre.jpg";
  subject: string = "Astrology";
  title: string = "New planet is being studied with the possibility of water";

  constructor() { }

  ngOnInit(): void {
  }

}
