import { Component, OnInit, HostListener} from '@angular/core';
declare let PDFLib: any;
const { PDFDocument, PDFNumber} = PDFLib;

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
  public imageUrl;

  OnFileUpload(event){
    this.file_number += event.target.files.length;
    this.imageUrl= URL.createObjectURL(event.target.files[0]);
  }

  createPdf=async()=>{

    const jpgUrl = this.imageUrl;
    const jpgImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer())
    
    const pdfDoc = await PDFDocument.create()
    
    const jpgImage = await pdfDoc.embedJpg(jpgImageBytes)
    const jpgDims = jpgImage.scale(0.25)
    const page = pdfDoc.addPage()
    
    page.drawImage(jpgImage, {
      x: page.getWidth() / 2 - jpgDims.width / 2,
      y: page.getHeight() / 2 - jpgDims.height / 2,
      width: jpgDims.width,
      height: jpgDims.height,
    })
    
    const pdfDataUri = await pdfDoc.saveAsBase64({DataUri: true});
      var a=document.createElement("a");
      a.href = "data:application/pdf;base64,"+  pdfDataUri;
      a.download = ".pdf";
      a.click();
    }

}
