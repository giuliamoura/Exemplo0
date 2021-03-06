import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaltasComponent } from './faltas.component';

describe('FaltasComponent', () => {
  let component: FaltasComponent;
  let fixture: ComponentFixture<FaltasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaltasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
