import {Component, Input, OnInit} from '@angular/core';
import {BoardService} from '../board.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() index: Integer;

  constructor(public boardService: BoardService) {
  }

  ngOnInit() {
  }

}
