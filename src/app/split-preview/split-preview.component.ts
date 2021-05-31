import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-split-preview',
  templateUrl: './split-preview.component.html',
  styleUrls: ['./split-preview.component.css']
})
export class SplitPreviewComponent implements OnInit {
  
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
  ranges = ['RANGE 1'];
  

  addRange() {
    this.ranges.push(`RANGE ${this.ranges.length + 1}`);
  }

  removeRange(range){
    this.ranges.splice(this.ranges.indexOf(range),1);
  }
  
}
