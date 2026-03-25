import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { OnInit } from '../../../../node_modules/@angular/core/types/core';
import { Subscription } from '../../../../node_modules/rxjs/dist/types/internal/Subscription';
import { counterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-value',
  standalone: false,
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.scss',
})
export class CounterValue implements OnInit{
  counter: number=0;
  counterSupscription: Subscription | null = null;
  constructor(private store: Store<{counter: counterState}>){}

  ngOnInit(){
    this.counterSupscription= this.store.select('counter').subscribe((data:any)=>{
      this.counter = data.counter;
    })
  }
}
