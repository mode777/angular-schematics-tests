import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KateComponent } from './kate.component';

describe('KateComponent', () => {
  let component: KateComponent;
  let fixture: ComponentFixture<KateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
