import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSertificatesComponent } from './skills-sertificates.component';

describe('SkillsSertificatesComponent', () => {
  let component: SkillsSertificatesComponent;
  let fixture: ComponentFixture<SkillsSertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsSertificatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsSertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
