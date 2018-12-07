import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildlistviewComponent } from './buildlistview.component';

describe('BuildlistviewComponent', () => {
  let component: BuildlistviewComponent;
  let fixture: ComponentFixture<BuildlistviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildlistviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildlistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
