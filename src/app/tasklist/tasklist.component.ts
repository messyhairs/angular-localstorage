import { Component, OnInit } from '@angular/core';
import { DatasService } from "../datas.service";
import { Task } from '../task';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  tasks: Task[];

  constructor(public datasService: DatasService) {
    
  }

  ngOnInit() {
    this.tasks = this.datasService.getTasks();
  }

  addTask(task: Task) {
    console.log(task);
    this.datasService.addTask(task);
  }

}