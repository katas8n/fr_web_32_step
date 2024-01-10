import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
 @Input() data:any [];
 @Input() sayHello;
 @Output() emitListener:any = new EventEmitter();

 public inputValue:string = "";
 public areaValue:string = "";


 public addNewElement() {
  console.log(this.inputValue);
  this.data.push(this.inputValue);
  this.readTextarea();
 }

 public readTextarea(){
  console.log("Inside readTextarea")
  this.emitListener.emit(this.areaValue)
 }

 public readValue(newValue) {
  this.inputValue = newValue.value;

 }
}
