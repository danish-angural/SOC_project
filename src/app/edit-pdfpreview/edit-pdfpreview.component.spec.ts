import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPDFPreviewComponent } from './edit-pdfpreview.component';

describe('EditPDFPreviewComponent', () => {
  let component: EditPDFPreviewComponent;
  let fixture: ComponentFixture<EditPDFPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPDFPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPDFPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
