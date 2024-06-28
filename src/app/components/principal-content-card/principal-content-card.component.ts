import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-content-card',
  templateUrl: './principal-content-card.component.html',
  styleUrls: ['./principal-content-card.component.css']
})
export class PrincipalContentCardComponent implements OnInit {
  @Input()
  image: string = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";
  @Input()
  subject: string = "Loading...";
  @Input()
  title: string = "Loading...";

  constructor() { }

  ngOnInit(): void {
  }

}
