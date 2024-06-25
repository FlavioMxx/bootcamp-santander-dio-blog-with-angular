import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  sections: string[] = [
    "Engineering", 
    "Product",
    "Security",
    "Open Source",
    "Enterprise",
    "Policy",
    "Education",
    "Community",
    "Company"   
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
