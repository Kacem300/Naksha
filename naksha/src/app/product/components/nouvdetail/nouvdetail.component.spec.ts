import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvdetailComponent } from './nouvdetail.component';

describe('NouvdetailComponent', () => {
  let component: NouvdetailComponent;
  let fixture: ComponentFixture<NouvdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
