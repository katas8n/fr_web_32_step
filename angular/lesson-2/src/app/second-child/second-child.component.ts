import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrl: './second-child.component.css'
})
export class SecondChildComponent implements OnInit{
  @Output() secondEmitter = new EventEmitter();

  public data = [
    "Evgenia",
    "Guslan",
    "Yarost`"
  ]

  public listenEmitter() {
    this.secondEmitter.emit(this.data);
  }

  ngOnInit(): void {
    // this.listenEmitter();
  }
}
