import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.action';
import { counterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-button',
  standalone: false,
  templateUrl: './counter-button.html',
  styleUrl: './counter-button.scss',
})
export class CounterButton {

  constructor(private store: Store<{counter: counterState}>){}

  onIncrement(){
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }
}
