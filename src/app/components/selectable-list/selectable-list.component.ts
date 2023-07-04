import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selectable-list',
  templateUrl: './selectable-list.component.html',
  styleUrls: ['./selectable-list.component.css']
})
export class SelectableListComponent {
  @Input() items : string[] = [];

  @Output() itemsChange = new EventEmitter();

  

  @Output() onSelect = new EventEmitter();

  removeItem(index: number){
    this.itemsChange.emit( this.items.filter((_,i) => i !== index ));
  }

  
  addItem(item: string){
    this.itemsChange.emit( this.items.push(item));
  }
}
