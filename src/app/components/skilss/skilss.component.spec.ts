import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilssComponent } from './skilss.component';

describe('SkilssComponent', () => {
  let component: SkilssComponent;
  let fixture: ComponentFixture<SkilssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkilssComponent]
    });
    fixture = TestBed.createComponent(SkilssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
