import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  status: String = 'Next player: X';
  squares: String[] = Array(9).fill(0, 0, 9);
  constructor() { }

  ngOnInit() {
  }

}
