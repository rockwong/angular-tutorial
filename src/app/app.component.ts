import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private listService: ListService, private cd: ChangeDetectorRef) {}
  title = 'angular-todo';
  newTitle = '';
  filterType = -1;
  list: ITodoItem[];
  get finalList() {
    if (this.filterType === 0) return this.list.filter(item => !item.completed);
    else if (this.filterType === 1) return this.list.filter(item => item.completed);
    else return this.list;
  }
  ngOnInit(): void {
    this.onFetch();
  }
  onFetch() {
    this.listService.getList().subscribe(res => {
      console.log('app.component.ts res==', res);
      this.list = res;
      // this.cd.detectChanges();
    });
  }
  onAdd(title) {
    if (!title) return;
    this.listService.add(title).subscribe(() => {
      this.onFetch();
    });
  }
  onDelete(id) {
    console.log('onDelete id===', id);
    this.listService.deleteByIds({ ids: [id] }).subscribe(() => {
      this.onFetch();
    });
  }
  onToggle(id) {
    this.listService.toggleById(id).subscribe(() => {
      this.onFetch();
    });
  }
  onTypeChange(type) {
    console.log('onTypeChange type==', type);
    this.filterType = type;
  }
}
