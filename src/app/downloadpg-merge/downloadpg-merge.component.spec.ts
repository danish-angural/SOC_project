import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadpgMergeComponent } from './downloadpg-merge.component';

describe('DownloadpgMergeComponent', () => {
  let component: DownloadpgMergeComponent;
  let fixture: ComponentFixture<DownloadpgMergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadpgMergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadpgMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
