import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopcardComponent } from './workshopcard.component';

describe('WorkshopcardComponent', () => {
  let component: WorkshopcardComponent;
  let fixture: ComponentFixture<WorkshopcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
