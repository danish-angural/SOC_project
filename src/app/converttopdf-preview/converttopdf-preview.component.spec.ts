import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverttopdfPreviewComponent } from './converttopdf-preview.component';

describe('ConverttopdfPreviewComponent', () => {
  let component: ConverttopdfPreviewComponent;
  let fixture: ComponentFixture<ConverttopdfPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverttopdfPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverttopdfPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
