import { Component, ViewChild, OnInit } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TaskComponent } from '../home/task.component';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})

export class EditTaskComponent implements OnInit { // OnInit is to use ngOnInit
  constructor(private route: ActivatedRoute) {} // this is to get the route parameter and use it in the component
  // ngOnInit is a lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const itemName = params.get('itemName');
      if (itemName) {
        this.checkIfItemExists(itemName);
      }
    });
  }

  task = { title: "", description: "", done: false }; // this will be inited by the checkIfItemExists function
  title = ""; // same
  allItems: { title: string, description: string, done: boolean }[] = [];
  private loadItems(): Boolean {
    try {
        const items = localStorage.getItem("items");
        if (items) {
            this.allItems = JSON.parse(items);
            return true;
        } else {
          return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
  }

  checkIfItemExists(itemName: string): Boolean {
    if (this.loadItems() === true) {
      for (let i = 0; i < this.allItems.length; i++) {
        // console.log(this.allItems[i]);
        if (this.allItems[i].title === itemName) {
          this.task = this.allItems[i]; // check against localStorage items then set the task to the found item
          this.title = this.allItems[i].title;
          return true;
        }
      }
      // console.log("No items found1 ");
      return false;
    } else {
      // console.log("No items found2 ");
      return false;
    }
  }

  updateItem(description: string) {
    const index = this.allItems.findIndex((item) => item.title === this.title);
    const item = this.allItems[index];
    if (description) {
      item.description = description;
    }
    this.saveItems();
  }

  private saveItems() {
    localStorage.setItem("items", JSON.stringify(this.allItems));
  }
}
