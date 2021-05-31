import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergePreviewComponent } from './merge-preview.component';

describe('MergePreviewComponent', () => {
  let component: MergePreviewComponent;
  let fixture: ComponentFixture<MergePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
