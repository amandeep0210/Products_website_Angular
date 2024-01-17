import { Component } from '@angular/core';
import { Product } from '../../product';
import { NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
      products : Product[] = [
        {
          id: 1,
          name: "Product 1",
          type: "free",
          price: 19.99,
          discount: 5,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          url: "assets/images/1.jpg",
        },
        {
          id: 2,
          name: "Product 2",
          type: "free",
          price: 29.99,
          discount: 10,
          description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "assets/images/2.jpg",
        },
        {
          id: 3,
          name: "Product 3",
          type: "premium",
          price: 39.99,
          discount: 8,
          description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          url: "assets/images/3.jpg",
        },
        {
          id: 4,
          name: "Product 4",
          type: "free",
          price: 49.99,
          discount: 15,
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
          url: "assets/images/4.jpg",
        },
        {
          id: 5,
          name: "Product 5",
          type: "premium",
          price: 59.99,
          discount: 12,
          description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
          url: "assets/images/5.jpg",
        },
        {
          id: 6,
          name: "Product 6",
          type: "premium",
          price: 69.99,
          discount: 7,
          description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
          url: "assets/images/6.jpg",
        },
        {
          id: 7,
          name: "Product 7",
          type: "free",
          price: 79.99,
          discount: 20,
          description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.",
          url: "assets/images/7.jpg",
        },
        {
          id: 8,
          name: "Product 8",
          type: "free",
          price: 89.99,
          discount: 18,
          description: "Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          url: "assets/images/8.jpg",
        },
        {
          id: 9,
          name: "Product 9",
          type: "premium",
          price: 99.99,
          discount: 9,
          description: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
          url: "assets/images/9.jpg",
        },
        {
          id: 10,
          name: "Product 10",
          type: "free",
          price: 109.99,
          discount: 14,
          description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
          url: "assets/images/10.jpg",
        },
        {
          id: 11,
          name: "Product 11",
          type: "premium",
          price: 119.99,
          discount: 16,
          description: "Corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.",
          url: "assets/images/11.jpg",
        },
        {
          id: 12,
          name: "Product 12",
          type: "premium",
          price: 129.99,
          discount: 11,
          description: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum.",
          url: "assets/images/12.jpg",
        },
        {
          id: 13,
          name: "Product 13",
          type: "free",
          price: 139.99,
          discount: 25,
          description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.",
          url: "assets/images/13.jpg",
        },
        {
          id: 14,
          name: "Product 14",
          type: "free",
          price: 149.99,
          discount: 13,
          description: "Quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
          url: "assets/images/14.jpg",
        },
        {
          id: 15,
          name: "Product 15",
          type: "premium",
          price: 159.99,
          discount: 22,
          description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",
          url: "assets/images/15.jpg",
        },
        {
          id: 16,
          name: "Product 16",
          type: "premium",
          price: 199,
          discount: 22,
          description: "Temporibus some of the aut rerum necessitatibus saepe eveniet.",
          url: "assets/images/16.jpg",
        },
      ];

      type : string = 'all';
      

      selectProducts(temp : string){
        this.type = temp;
      }
}
