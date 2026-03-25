import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from '../../../../node_modules/rxjs/dist/types/index';
import { counterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-base',
  standalone: false,
  templateUrl: './counter-base.html',
  styleUrl: './counter-base.scss',
})
export class CounterBase {
  // counter: number=0;
  // counterSupscription: Subscription | null = null;
  // constructor(private store: Store<{counter: counterState}>){}

  // ngOnInit(): void {
  //   this.counterSupscription = this.store.select('counter').subscribe((data:any)=>{
  //     this.counter = data.counter;
  //   })
  // }
}
