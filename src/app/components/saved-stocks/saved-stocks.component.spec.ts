import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedStocksComponent } from './saved-stocks.component';

describe('SavedStocksComponent', () => {
  let component: SavedStocksComponent;
  let fixture: ComponentFixture<SavedStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedStocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
