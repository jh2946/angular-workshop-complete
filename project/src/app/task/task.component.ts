import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() id = -1;
  @Input() title = 'New Task';
  @Input() description = '';
  @Input() isChecked = true;

  @Output() changeEvent = new EventEmitter();

  doneOrNot(event: any) {
    this.isChecked = event.currentTarget.checked;
    console.log('here');
    this.updateParent();
  }

  updateParent() {
    this.changeEvent.emit({
      id: this.id, 
      title: this.title,
      description: this.description,
      isChecked: this.isChecked
    });
  }

}
