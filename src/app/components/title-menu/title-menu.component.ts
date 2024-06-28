import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-menu',
  templateUrl: './title-menu.component.html',
  styleUrls: ['./title-menu.component.css']
})
export class TitleMenuComponent implements OnInit {

  title: string = "BLOG DA MARIA";

  constructor() { }

  ngOnInit(): void {
  }

}
