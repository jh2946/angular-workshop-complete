import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() id = -1;
  @Input() title = '';
  @Input() description = '';
  @Input() isChecked = false;

  @Output() changeEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  
  doneOrNot(event: any) {
    this.isChecked = event.currentTarget.checked;
    this.changeEvent.emit({
      id: this.id,
      isChecked: this.isChecked
    });
  }

  deleteItem() {
    this.deleteEvent.emit({
      id: this.id
    })
  }
}
