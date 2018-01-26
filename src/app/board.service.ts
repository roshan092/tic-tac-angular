import {Injectable} from '@angular/core';

@Injectable()
export class BoardService {
  status: String = 'Next player: X';
  squares: String[] = Array(9).fill(null);
  xIsNext: Boolean = true;

  constructor() {
  }

  updateBoard(index) {
    if (this.squares[index] === null) {
      this.squares[index] = (this.xIsNext ? 'X' : 'O');
      if (this.hasPlayerWon(this.squares)) {
        this.status = `Player ${(this.xIsNext ? 'X' : 'O')} won`;
      } else {
        this.status = `Next player ${(!this.xIsNext ? 'X' : 'O')}`;
      }
      this.xIsNext = !this.xIsNext;
    }
    console.log('=============>', this.squares);
  }

  hasPlayerWon(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return true;
      }
    }
  }

}
