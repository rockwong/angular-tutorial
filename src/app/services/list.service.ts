import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

const getData = () => {
  let list = [{ id: '1', title: 'test', completed: false }];
  const listStr = localStorage.getItem('list');
  try {
    const listArray = JSON.parse(listStr);
    if (Array.isArray(listArray)) list = listArray;
  } catch (e) {}
  return list;
};
const saveData = list => localStorage.setItem('list', JSON.stringify(list));

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}
  getList(): Observable<any> {
    return of(getData());
  }
  add(title) {
    const list = getData();
    const id = +new Date();
    list.push({ title, id: id.toString(36), completed: false });
    saveData(list);
    return of([]);
  }
  deleteByIds({ ids }) {
    const list = getData().filter(item => !ids.includes(item.id));
    saveData(list);
    return of([]);
  }
  toggleById(id) {
    const list = getData().map(subItem => {
      if (subItem.id === id) return { ...subItem, completed: !subItem.completed };
      return subItem;
    });
    saveData(list);
    return of([]);
  }
  toggleAll() {
    const list = getData();
    const isFinished = list.every(item => item.completed);
    return list.map(item => {
      item.completed = !isFinished;
      return item;
    });
  }
}
