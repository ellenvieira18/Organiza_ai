import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import { Router } from '@angular/router';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatCardModule} from '@angular/material/card';
// import {provideNativeDateAdapter} from '@angular/material/core';

import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

export interface Task {
  // name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-visao-geral',
  templateUrl: './visao-geral.html',
  styleUrl: './visao-geral.scss',
  imports: [MatCheckboxModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class VisaoGeral {
  selected: Date | null = null; 
  constructor(private router: Router) {}

  readonly task = signal<Task>({
    // name: 'Parent task',
    completed: false,
    // subtasks: [
    //   // {name: 'Child task 1', completed: false},
    //   // {name: 'Child task 2', completed: false},
    //   // {name: 'Child task 3', completed: false},
    // ],
  });
    readonly partiallyComplete = computed(() => {
    const task = this.task();
    if (!task.subtasks) {
      return false;
    }
    return task.subtasks.some(t => t.completed) && !task.subtasks.every(t => t.completed);
  });
  
// update(completed: boolean, index?: number) {
//     this.task.update(task => {
//       if (index === undefined) {
//         task.completed = completed;
//         task.subtasks?.forEach(t => (t.completed = completed));
//       } else {
//         task.subtasks![index].completed = completed;
//         task.completed = task.subtasks?.every(t => t.completed) ?? true;
//       }
//       return {...task};
//     });
//   }
  
}
