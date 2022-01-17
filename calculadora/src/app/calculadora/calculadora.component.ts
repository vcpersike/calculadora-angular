import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  buttons1 = ['C', '/'];
  buttons2 = [7, 8, 9, '*'];
  buttons3 = [4, 5, 6, '-'];
  buttons4 = [1, 2, 3, '+'];
  buttons5 = [0, '='];

  val = '';

  constructor() {}

  calc($event: any) {
    var button = $event;

    if (button === '=') {
      this.val = eval(this.val);
    } else if (button === 'C') {
      this.val = '';
    } else {
      this.val += button;
    }
  }
  ngOnInit(): void {}
}
