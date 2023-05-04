import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksredesComponent } from './linksredes.component';

describe('LinksredesComponent', () => {
  let component: LinksredesComponent;
  let fixture: ComponentFixture<LinksredesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksredesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksredesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
