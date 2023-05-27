import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilainDetailsComponent } from './vilain-details.component';

describe('VilainDetailsComponent', () => {
  let component: VilainDetailsComponent;
  let fixture: ComponentFixture<VilainDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilainDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
