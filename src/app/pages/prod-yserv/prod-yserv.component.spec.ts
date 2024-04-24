import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdYservComponent } from './prod-yserv.component';

describe('ProdYservComponent', () => {
  let component: ProdYservComponent;
  let fixture: ComponentFixture<ProdYservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdYservComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdYservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
