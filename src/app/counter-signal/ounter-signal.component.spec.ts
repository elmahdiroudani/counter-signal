// src/app/counter-signal/counter-signal.component.spec.ts
import { TestBed } from '@angular/core/testing';
import { CounterSignalComponent } from './counter-signal.component';

describe('CounterSignalComponent', () => {
  let component: CounterSignalComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterSignalComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Trigger initial data binding
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize count to 0', () => {
    expect(component.count()).toBe(0);
  });

  it('should increment count when increment() is called', () => {
    component.increment();
    expect(component.count()).toBe(1);
  });

  it('should compute doubleCount as double of count', () => {
    expect(component.doubleCount()).toBe(0);
    component.increment();
    expect(component.count()).toBe(1);
    expect(component.doubleCount()).toBe(2);
  });
});
