// src/app/app.component.ts
import { Component } from '@angular/core';
import { CounterSignalComponent } from './counter-signal/counter-signal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterSignalComponent],
  template: `<app-counter-signal></app-counter-signal>`
})
export class AppComponent { }
