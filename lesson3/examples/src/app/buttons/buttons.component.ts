import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactiveArray: boolean[] = [false, false, false]

   constructor() { }

   ngOnInit() { }

   activateSwitch() {
      for (let i = 0; i < this.inactiveArray.length; i++) {
         this.inactiveArray[i] = false;
      } return this.inactiveArray;
   }
}
