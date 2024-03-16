import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css'
})
export class TaskComponent {
    filter: "all" | "active" | "done" = "all";
    allItems: { title: string, description?: string, done: boolean }[] = [];
    localStorage = document.defaultView?.localStorage;
    // todo: create a constructor to get allitems from localstorage. if it does not exist, create one
    private loadItems() {
        try {
            const items = localStorage.getItem("items");
            if (items) {
                this.allItems = JSON.parse(items);
            } else {
                this.allItems = [
                    { "title": "Sweep the floor", "done": true },
                    { "title": "History Homework", "description": "ABCSS Prelim 2022 Paper 1 Timed Practice", "done": false },
                ]
            }
        } catch (error) {
            console.error(error);
            this.allItems = [
                { "title": "Sweep the floor", "done": true },
                { "title": "History Homework", "description": "ABCSS Prelim 2022 Paper 1 Timed Practice", "done": false },
            ]
        }
    }
    constructor() {
        this.loadItems();
    }
    
    get items() {
        if (this.filter === "all") {
            return this.allItems;
        }
        return this.allItems.filter((item) =>
            this.filter === "done" ? item.done : !item.done
        );
    }

    saveItems() {
        try {
            localStorage.setItem("items", JSON.stringify(this.allItems));
        } catch (error) {
            console.error(error);
        }
    }

    addItem(title: string, description: string = "") {
        this.allItems.unshift({
            title,
            description,
            done: false
        });
        this.saveItems();
    }

    deleteItem(title: string) {
        const index = this.allItems.findIndex((item) => item.title === title);
        this.allItems.splice(index, 1);
        this.saveItems();
    }

    updateItem(initialTitle: string, title?: string, description?: string) {
        const index = this.allItems.findIndex((item) => item.title === initialTitle);
        const item = this.allItems[index];
        if (title) {
            item.title = title;
        }
        if (description) {
            item.description = description;
        }
        this.saveItems();
    }

    toggleCompleted($event:any, title: string) {
        const index = this.allItems.findIndex((item) => item.title === title);
        if (this.allItems[index].done == true) {
            this.allItems[index].done = false;
        } else {
            this.allItems[index].done = true; // yeah I know
        }

        const parentDiv = $event.target.closest('.task');
        // console.log(parentDiv)
        if (parentDiv) {
            parentDiv.classList.toggle('completed', this.allItems[index].done);
        } else {
            console.log('parentDiv not found');
        }
        this.saveItems();
    }

    isCompleted(title: string) {
        const index = this.allItems.findIndex((item) => item.title === title);
        return this.allItems[index].done;
    }

    @Output() itemAdded = new EventEmitter<{ title: string, description: string }>();
    onCreateClick(title: string, description: string) {
        this.addItem(title, description);
        this.itemAdded.emit({ title, description });
    }

    @Output() itemDeleted = new EventEmitter<string>();
    onDeleteClick(title: string) {
        this.deleteItem(title);
        this.itemDeleted.emit(title);
    }

    @Output() itemUpdated = new EventEmitter<{ initialTitle: string, title?: string, description?: string }>();
    onUpdateClick(initialTitle: string, title?: string, description?: string) {
        this.updateItem(initialTitle, title, description);
        this.itemUpdated.emit({ initialTitle, title, description });
    }

    @Input() hideCompleted = false;
}
