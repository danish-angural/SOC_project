import { Component, OnInit , HostListener} from '@angular/core';
// import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
declare let PDFLib: any;
const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib
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
  public file_number=1;
  public imageUrl;

  OnFileUpload(event){
    this.file_number += event.target.files.length;
    this.imageUrl= URL.createObjectURL(event.target.files[0]);
  }




  values = '';
  values_x = 1;
  values_y = 1;
  values_pg = 0;

 update(value: string) {
    this.values = value ;
  }


update_x(value1: number) {
      
    this.values_x = value1 ;
  }

  update_y(value2: number) {
    this.values_y = value2 ;
  }

  update_pg(value3: number) {
    this.values_pg = value3 ;
  }


  modifyPdf=async()=>{
    const x1 = this.values_x;
    const pg = this.values_pg;
    const y1 = this.values_y;
    const url = this.imageUrl;
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes)

    // Embed the Helvetica font
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

    // Get the first page of the document
    const pages = pdfDoc.getPages()
    const firstPage = pages[pg-1]

    // Get the width and height of the first page
    const { width, height } = firstPage.getSize() 
    
    // Draw a string of text diagonally across the first page
    firstPage.drawText(this.values, {
      x: width-50 ,
      y: height / 2 + 0,
      size:20,
      font: helveticaFont,
      color: rgb(0.95, 0.1, 0.1),
      rotate: degrees(0),
    })

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()

    // Trigger the browser to download the PDF document
    const pdfDataUri = await pdfDoc.saveAsBase64({DataUri: true});
      var a=document.createElement("a");
      a.href = "data:application/pdf;base64,"+  pdfDataUri;
      a.download = ".pdf";
      a.click();
    
  }
  
}


