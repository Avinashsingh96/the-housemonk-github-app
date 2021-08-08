import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserNameComponent } from './github-user-name.component';

describe('GithubUserNameComponent', () => {
  let component: GithubUserNameComponent;
  let fixture: ComponentFixture<GithubUserNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUserNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
