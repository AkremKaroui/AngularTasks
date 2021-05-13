import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private visibleAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(){
    this.visibleAddTask = !this.visibleAddTask;
    this.subject.next(this.visibleAddTask);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
