import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatedGroupsComponent } from './affiliated-groups.component';

describe('AffiliatedGroupsComponent', () => {
  let component: AffiliatedGroupsComponent;
  let fixture: ComponentFixture<AffiliatedGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliatedGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliatedGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
