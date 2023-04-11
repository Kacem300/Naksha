import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneprodnovComponent } from './oneprodnov.component';

describe('OneprodnovComponent', () => {
  let component: OneprodnovComponent;
  let fixture: ComponentFixture<OneprodnovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneprodnovComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneprodnovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
