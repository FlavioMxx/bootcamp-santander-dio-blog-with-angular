import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  @Input()
  image: string = "";
  @Input()
  title: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
