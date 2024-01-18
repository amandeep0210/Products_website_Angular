import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
      @Input() all : number = 0;
      @Input() free : number = 0;
      @Input() prem : number = 0;

      @Output() filter : EventEmitter<string> = new EventEmitter<string>();
      
      productType : string = 'all';

      raisetheEvent(type : string){
        this.productType = type;
        this.filter.emit(this.productType);
      }
}
