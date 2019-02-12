import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  constructor() {}
  btns = [{ key: -1, value: 'All' }, { key: 0, value: 'Active' }, { key: 1, value: 'Completed' }];
  @Input() list: Array<ITodoItem>;
  @Input() type: number;
  @Output() change = new EventEmitter();
  ngOnInit() {}
  onChange(type) {
    this.change.emit(type);
  }
}
