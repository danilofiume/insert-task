import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTaskPageComponent } from './detail-task-page.component';

describe('DetailTaskPageComponent', () => {
  let component: DetailTaskPageComponent;
  let fixture: ComponentFixture<DetailTaskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailTaskPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
