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

  tasklist: any[] = [];

  ngOnInit() {
    // check if code is running on client-side, then check if tasklist is already in storage
    if (typeof window !== 'undefined' && window.localStorage['tasklist'])
      this.tasklist = JSON.parse(localStorage['tasklist']); // 
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
    const updatedTask = this.tasklist[id];
    updatedTask.isChecked = data.isChecked;
    this.save();
  }

  delete(data: any) {
    this.tasklist.splice(data.id, 1);
    this.save();
  }
  
  save() {
    localStorage['tasklist'] = JSON.stringify(this.tasklist);
  }

}
