import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-converttopdf-preview',
  templateUrl: './converttopdf-preview.component.html',
  styleUrls: ['./converttopdf-preview.component.css']
})
export class ConverttopdfPreviewComponent implements OnInit {

  private initialWidth= window.innerWidth;
  private breakpoint=700;
  public isOpen =(this.initialWidth>=this.breakpoint)? true : false ;

  @HostListener('window:resize') onResize() {
    const width = window.innerWidth;
    if (width >= this.breakpoint) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }

  ngOnInit(): void {
  }
  public file_number=1;
  OnFileUpload(event){
    this.file_number += event.target.files.length;
    
  }


}
