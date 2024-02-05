import { Component,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild,
  ElementRef, 
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges, OnDestroy, OnInit {
  public inputMessage = 'Message directly from input!';
  public interval;
  constructor() {
    // this.inputMessage = "Here we are!"

  }

  ngOnInit(): void {
  
  };

  ngOnChanges(): void {
    console.log("ngOnChanges[APP]");
  }

  ngOnDestroy(): void {

    clearInterval(this.interval); 
    console.log("ngOnDestroy[APP]");
  }
}
