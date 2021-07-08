import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadpgSplitComponent } from './downloadpg-split.component';

describe('DownloadpgSplitComponent', () => {
  let component: DownloadpgSplitComponent;
  let fixture: ComponentFixture<DownloadpgSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadpgSplitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadpgSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
