import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseEntryComponent } from "./components/expense-entry/expense-entry.component";
import { MyLifecycleSampleComponent } from "./components/my-lifecycle-sample/my-lifecycle-sample.component";
import { ViewEncapsultationComponent } from "./components/view-encapsultation/view-encapsultation.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExpenseEntryComponent, MyLifecycleSampleComponent, ViewEncapsultationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Expense-manager';
}
