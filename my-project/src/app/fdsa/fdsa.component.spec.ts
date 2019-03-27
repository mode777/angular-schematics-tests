import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdsaComponent } from './fdsa.component';

describe('FdsaComponent', () => {
  let component: FdsaComponent;
  let fixture: ComponentFixture<FdsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
