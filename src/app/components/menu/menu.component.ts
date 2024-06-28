import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  sections: string[] = [
    "ENGINEERING", 
    "JAVA",
    "SPRINGBOOT",
    "UNITARY TESTS",
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "ANGULAR"   
  ];

  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(option: string): void {
    console.log(`Navigating to ${option}`);
    // Implement your navigation logic here
  }
}
