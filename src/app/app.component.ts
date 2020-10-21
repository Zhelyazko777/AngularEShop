import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from './store/app-state';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  isModalOpened: boolean;
  subscriptions: Subscription[] = [];

  constructor(public store: Store<AppState>){}

  ngOnInit(): void {
    this.subscriptions.push(
      this.store.select(x => x.layout).subscribe(x => {
        this.isModalOpened = x.isModalOpened;
      })
    );
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
