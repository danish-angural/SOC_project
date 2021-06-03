import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  cards:carddetails[]

  constructor() { 
    this.cards=[
      {
        title:"Merge PDF",
        c:1,
        desc:"merges two or more pdf",
        classname:"merge-pdf"

      },
      {
        title:"Split PDF",
        c:2,
        desc:"merges two or more pdf",
        classname:"merge-pdf"

      },
      {
        title:"Convert to PDF",
        c:3,
        desc:"merges two or more pdf",
        classname:"merge-pdf"

      },
      {
        title:"Edit PDF",
        c:4,
        desc:"merges two or more pdf",
        classname:"merge-pdf"

      }
    ]
  }

  ngOnInit(): void {
  }

}

class carddetails {

  title:string
  c:number
  desc:string
  classname:string
  // constructor(parameters) {
    
  // }
}
