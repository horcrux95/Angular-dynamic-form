import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInsertScreenComponent } from './product-insert-screen.component';

describe('ProductInsertScreenComponent', () => {
  let component: ProductInsertScreenComponent;
  let fixture: ComponentFixture<ProductInsertScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInsertScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInsertScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
