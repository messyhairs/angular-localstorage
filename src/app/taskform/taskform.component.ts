import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  title: string;
  description: string;

  constructor(public datasService: DatasService) { }

  ngOnInit() {
  }

  addTask(newTitle: HTMLInputElement, newDescription: HTMLInputElement) {
    this.datasService.addTask({
      title: newTitle.value,
      description: newDescription.value,
      hide: true
    });
    newTitle.value = '';
    newDescription.value = '';
    return false;
  }

}