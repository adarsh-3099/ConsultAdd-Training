import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currIdx: any;
  currVal: any;
  convertedVal: any;
  CV: any;
  currList: any = [{ name: 'India Rupee', symbol: '₹', value: { '₹': 1, '$': 0.013450394, '৳': 1.1543927, 'Rp': 193.06836, '£': 0.0099391779 } }, 
  { name: 'United States Dollar', symbol: '$', value: { '₹': 74.3417, '$': 1, '৳': 85.90755, 'Rp': 14353.358, '£': 0.73866631 } },
  { name: 'Bangladeshi taka', symbol: '৳', value: { '₹': 0.866256, '$': 0.0116404, '৳': '1', 'Rp': 167.05647, '£': 0.0085982302 } }, 
  { name: 'Indonesian rupiah', symbol: 'Rp', value: { '₹': 0.00517951, '$': 0.0000696701, '৳': 0.00598616, 'Rp': 1, '£': 0.000051486203 } }, 
  { name: 'British Pound', symbol: '£', value: { '₹': 100.622, '$': 1.35375, '৳': 116.277, 'Rp': 19422.7, '£': 1 } }];
  Chnange() {
    console.log(this.currIdx);
    console.log(this.currVal);

    if (this.currIdx && this.currVal && this.convertedVal) {
      console.log(this.currList[this.currIdx].value[this.convertedVal])
      this.CV = this.currVal * this.currList[this.currIdx].value[this.convertedVal];
    }
  }
}
