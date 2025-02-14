import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedContactComponent } from './detailed-contact.component';

describe('DetailedContactComponent', () => {
  let component: DetailedContactComponent;
  let fixture: ComponentFixture<DetailedContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
