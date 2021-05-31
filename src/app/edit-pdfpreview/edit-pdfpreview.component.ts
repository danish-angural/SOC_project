import { Component, OnInit , HostListener} from '@angular/core';

@Component({
  selector: 'app-edit-pdfpreview',
  templateUrl: './edit-pdfpreview.component.html',
  styleUrls: ['./edit-pdfpreview.component.css']
})
export class EditPDFPreviewComponent implements OnInit {

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

  


}
