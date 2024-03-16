import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() title = '';
  @Input() description = '';
  isChecked = false;
  toggle($event: any) {
    this.isChecked = !this.isChecked
  }
}
