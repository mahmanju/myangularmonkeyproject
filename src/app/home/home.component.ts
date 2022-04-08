import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  @Input() name: string;
  @Input() typesOfMonkeys: any;

  ngOnInit() {
    this.name = 'Sowmya';
    this.typesOfMonkeys = [
      { type: 'Orangutan', area: 'Aisa' },
      { type: 'Resees', area: 'Africa' },
      { type: 'Gorilla', area: 'America' },
      { type: 'Chimpanze', area: 'Australia' },
    ];
  }
}
