import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecerteryHomeComponent } from './secertery-home.component';

describe('SecerteryHomeComponent', () => {
  let component: SecerteryHomeComponent;
  let fixture: ComponentFixture<SecerteryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecerteryHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecerteryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
