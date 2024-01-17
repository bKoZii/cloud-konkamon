import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsenameDialogComponent } from './usename-dialog.component';

describe('UsenameDialogComponent', () => {
  let component: UsenameDialogComponent;
  let fixture: ComponentFixture<UsenameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsenameDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsenameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
