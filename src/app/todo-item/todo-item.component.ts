import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  constructor() {}
  @Input() title = 'Untitled';
  @Input() completed: string;
  @Input() id: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  ngOnInit() {}
  onToggle() {
    this.toggle.emit(!this.completed);
  }
  Output() {
    this.delete.emit(this.id);
  }
}
