import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTaskPageComponent } from './insert-task-page.component';

describe('InsertTaskPageComponent', () => {
  let component: InsertTaskPageComponent;
  let fixture: ComponentFixture<InsertTaskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertTaskPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
