import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
  newtodo!:string;
  desc!: string;
  @Output() todoAdd:EventEmitter<Todo>= new EventEmitter();
  
  constructor(){}
 
  ngOnInit(): void{}

  onSubmit(){
    const todo={
      sno:1,
      name:this.newtodo,
      desc:this.desc,
      active: true
    }

    this.todoAdd.emit(todo);
  }


}
