// src/app/counter-signal/counter-signal.component.ts
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter-signal',
  standalone: true,
  template: `
    <div>
      <p>Count: {{ count() }}</p>
      <p>Double: {{ doubleCount() }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  `
})
export class CounterSignalComponent {
  // Create a reactive signal to hold the count
  count = signal(0);
  // Create a computed signal that derives its value from count
  doubleCount = computed(() => this.count() * 2);

  // Method to update the count signal
  increment(): void {
    this.count.update(c => c + 1);
  }
}
