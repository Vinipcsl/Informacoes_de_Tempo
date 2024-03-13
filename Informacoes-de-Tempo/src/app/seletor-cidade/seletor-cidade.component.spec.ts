import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorCidadeComponent } from './seletor-cidade.component';

describe('SeletorCidadeComponent', () => {
  let component: SeletorCidadeComponent;
  let fixture: ComponentFixture<SeletorCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeletorCidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeletorCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
