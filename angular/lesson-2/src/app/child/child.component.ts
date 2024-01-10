import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
 @Input() data:any [];
 public inputValue:string = "";

 public addNewElement() {
  console.log(this.inputValue);
  this.data.push(this.inputValue);
 }

 public readValue(newValue) {
  this.inputValue = newValue.value;

 }
}
