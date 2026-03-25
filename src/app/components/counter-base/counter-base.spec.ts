import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterBase } from './counter-base';

describe('CounterBase', () => {
  let component: CounterBase;
  let fixture: ComponentFixture<CounterBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterBase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterBase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
