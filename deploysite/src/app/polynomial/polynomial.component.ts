import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-polynomial',
  templateUrl: './polynomial.component.html',
  styleUrls: ['./polynomial.component.scss']
})
export class PolynomialComponent implements OnInit {

  public graph = {
      data: [
          { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
          { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
      ],
      layout: {width: 500, height: 500 , title: 'A Fancy Plot'}
  };

  constructor() { }

  ngOnInit(): void {
  }

}
