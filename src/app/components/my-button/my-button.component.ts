import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
})
export class MyButtonComponent {
  @ViewChild('button') button;

  focus() {
    this.button.nativeElement.focus();
  }

  clickAction() {
    console.log('MyButtonComponent clicked');
  }
}
