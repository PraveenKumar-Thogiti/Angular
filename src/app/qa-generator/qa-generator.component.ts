import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import QRCodeStyling from 'qr-code-styling';

@Component({
  selector: 'app-qa-generator',
  templateUrl: './qa-generator.component.html',
  styleUrls: ['./qa-generator.component.css']
})
export class QaGeneratorComponent implements OnInit {

  @ViewChild('canvas', {static: true}) canvas!: ElementRef;
  constructor() { }

  qrcode: any;
  ngOnInit(): void {
    this.generateQR()
  }

  generateQR() {
    this.qrcode= new QRCodeStyling({
      width: 300,
      height: 300,
      type: 'svg',
      data: "{Name:Praveen, age:21}",
      dotsOptions: {
          color: "#000000",
          type: "rounded"
      },
      backgroundOptions: {
          color: "#ffffff",
      },
      cornersSquareOptions:{
        color:'#BD022D',
        type: 'extra-rounded'
      },
      cornersDotOptions:{
        color:'#BD022D',
        type:'dot'
      },
      qrOptions:{
        typeNumber:0,
        mode:'Byte',
        errorCorrectionLevel:'Q'
      },
      imageOptions: {
          crossOrigin: "anonymous",
          margin: 20,
          imageSize:0.4,
          hideBackgroundDots:true
      }
    });
    this.qrcode.append(this.canvas.nativeElement);
  }
  

}


