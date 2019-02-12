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
  list: ITodoItem[];
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
}
