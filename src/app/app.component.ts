import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseEntryComponent } from "./components/expense-entry/expense-entry.component";
import { MyLifecycleSampleComponent } from "./components/my-lifecycle-sample/my-lifecycle-sample.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExpenseEntryComponent, MyLifecycleSampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Expense-manager';
}
