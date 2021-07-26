import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increament, decreament, reset } from '../counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  public countValue: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.countValue = store.select('count');
    //TODO: Connect 'this.count' stream to the current store 'count' state;
  }

  increament() {
    this.store.dispatch(increament());
  }

  decreament() {
    this.store.dispatch(decreament());
  }
  reset() {
    this.store.dispatch(reset());
  }

  ngOnInit(): void {}
}
