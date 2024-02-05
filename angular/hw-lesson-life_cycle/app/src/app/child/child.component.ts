import { Component,
          Input,
          OnInit,
          OnChanges,
          OnDestroy,
          ViewChild,
          ElementRef 
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy{
  @Input() inputMessage:string;
  public interval;
  public childMessage: string = "Child Element";
  constructor() {
    console.log("Constructor works!")
  }
  

  startInterval(): void {
    // this.inputMessage = "Keks!"
    this.interval = setInterval(() => {
      console.log("Second")
      console.log(this.interval)
    },1000)
  }

  ngOnInit(): void {
    this.startInterval()
  };

  ngOnChanges(): void {
    console.log("ngOnChanges[COMPONENT!]");
  }

  ngOnDestroy(): void {
    debugger;
    console.log("ngOnDestroy[COMPONENT!]");
    clearInterval(this.interval); 
    console.log("ngOnDestroy[APP]");
  }
}
