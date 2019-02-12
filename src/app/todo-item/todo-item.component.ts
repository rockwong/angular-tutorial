import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  constructor() {}
  @Input() title = 'Untitled';
  @Input() completed: boolean;
  @Input() id: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  ngOnInit() {}
  onToggle() {
    console.log('onToggle', this.completed);
    this.toggle.emit(!this.completed);
  }
  onDelete() {
    this.delete.emit(this.id);
  }
}
