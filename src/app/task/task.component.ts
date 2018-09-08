import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  constructor(public taskService: DatasService) { }

  ngOnInit() {
  }

  deleteTask(task: Task) {
    if(confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(task);
    }
  }

}