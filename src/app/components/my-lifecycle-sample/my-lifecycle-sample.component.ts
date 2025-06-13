import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-lifecycle-sample',
  standalone: true,
  imports: [],
  templateUrl: './my-lifecycle-sample.component.html',
  styleUrl: './my-lifecycle-sample.component.css'
})
export class MyLifecycleSampleComponent implements OnChanges, OnInit {
  constructor() {
    console.log("First Init")
  }
  ngOnChanges() {
    console.log("Change detection")
  }

  ngOnInit() {
    console.log("Initialization of component / directive")
  }

  ngDoCheck() {
    console.log("Custom change detection")
  }

  ngAferContentInit() {
    console.log("Content initialization")
  }

  ngAfterContentChecked() {
    console.log("Checking changes in content")
  }

  ngAfterViewInit() {
    console.log("View initialization")
  }

  ngAfterViewChecked() {
    console.log("Checking changes in views")
  }

  ngOnDestroy() {
    console.log("Destruction of component / directive")
  }
}
