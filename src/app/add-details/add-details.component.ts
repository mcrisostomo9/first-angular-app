import { Component, OnInit } from '@angular/core';
import {timestamp} from "rxjs/operator/timestamp";

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styles: [`
    .readable {
      color: white;
    }
  `]
})
export class AddDetailsComponent implements OnInit {
  displayParagraph: boolean = false;
  paragraphArray = [];
  counter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onAddDetails(){
    this.displayParagraph = !this.displayParagraph;
    this.counter++;
    // this.paragraphArray.push(this.counter)
    this.paragraphArray.push(new Date())
  }

}
