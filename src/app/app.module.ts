import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BoardComponent} from './board/board.component';
import {SquareComponent} from './square/square.component';
import {BoardService} from './board.service';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
