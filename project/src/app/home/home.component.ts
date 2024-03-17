import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tasklist: any[] = [
    {
      title: 'First task',
      description: 'My first task!',
      isChecked: false
    }
  ];

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage)
      this.tasklist = JSON.parse(localStorage['tasklist'] ?? '[]');
  }

  addTask(title: string, description: string) {
    this.tasklist.push({
      title,
      description,
      isChecked: false
    });
    this.save();
  }

  update(data: any) {
    const id = data.id;
    this.tasklist[id] = {
      title: data.title,
      description: data.description,
      isChecked: data.isChecked
    };
    this.save();
  }

  save() {
    localStorage['tasklist'] = JSON.stringify(this.tasklist);
  }

}
