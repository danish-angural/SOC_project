import { Component, OnInit , HostListener} from '@angular/core';


@Component({
  selector: 'app-merge-preview',
  templateUrl: './merge-preview.component.html',
  styleUrls: ['./merge-preview.component.css']
})
export class MergePreviewComponent implements OnInit {

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
  Min_2=(this.file_number>=2)? true : false;

   OnFileUpload(event){
    this.file_number += event.target.files.length;
    if(this.file_number>=2) this.Min_2= true;
    
  }

  
  
  


}
