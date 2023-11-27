import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}
@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // cartProductList = [];
  quan : number = 1;
  cartProductList: { name: string; price: number; category: string; image: string; }[] = [];
  

  constructor() { 
    console.log('1',this.cartProductList)
  }
  bodyText: any;
  title = 'POS-System';
  itemList = [
    {
      name: 'Computer',
      price: 70000,
      category: 'computers',
      image: 'computer.jpg'
    },
    {
      name: 'Berries',
      price: 500,
      category: 'Fruit',
      image: 'berries.jpg'
    },
    {
      name: 'Swater',
      price: 1000,
      category: 'Clothing',
      image: 'swater.jpg'
    },
    {
      name: 'Kivi',
      price: 200,
      category: 'fruit',
      image: 'kivi.jpg'
    },
    {
      name: 'Apple',
      price: 100,
      category: 'fruit',
      image: 'apple.jpg'
    },
    {
      name: 'Jamun',
      price: 50,
      category: 'fruit',
      image: 'jamun.jpg'
    },
    {
      name: 'Orange',
      price: 700,
      category: 'fruit',
      image: 'orange.jpg'
    },
    {
      name: 'Helth',
      price: 5000,
      category: 'helth',
      image: 'helth.jpg'
    },
    {
      name: 'Flower',
      price: 200,
      category: 'flower',
      image: 'flower.webp'
    },
    {
      name: 'Vegetable',
      price: 20,
      category: 'vegetable',
      image: 'vegetable.webp'
    },
    {
      name: 'Color Sport',
      price: 2000,
      category: 'cloth',
      image: 'color-sport.webp'
    },
    {
      name: 'Keyboard',
      price: 900,
      category: 'electronic',
      image: 'keyboard.jpg'
    },
    {
      name: 'HeadPhones',
      price: 800,
      category: 'electronic',
      image: 'headphones.jpg'
    },
    {
      name: 'Bomber Jacket',
      price: 4000,
      category: 'cloth',
      image: 'bomber-jacket.webp'
    },
    {
      name: 'Watch',
      price: 1700,
      category: 'electronic',
      image: 'watch.jpg'
    },
    {
      name: 'Books',
      price: 200,
      category: 'books',
      image: 'hand-drawn.webp'
    },
    {
      name: 'Tools',
      price: 300,
      category: 'tools',
      image: 'tools.jpg'
    },
    {
      name: 'Computer Parts',
      price: 300,
      category: 'computer',
      image: 'computer-parts.jpg'
    },
    {
      name: 'Ties',
      price: 30,
      category: 'Cloths',
      image: 'ties.jpg'
    },
    {
      name: 'Mouse',
      price: 200,
      category: 'Computer',
      image: 'mouse.jpg'
    },
    {
      name: 'Television',
      price: 5000,
      category: 'electrinic',
      image: 'television.jpg'
    },
    {
      name: 'Chips',
      price: 10,
      category: 'food',
      image: 'chips.webp'
    },
  ]

  ngAfterViewInit() {
    console.log('1',this.cartProductList)
  }
  
  // onclickImage(event: any, value: number) {
  //   console.log(event)
  //   console.log(value)
  //   console.log('1',this.cartProductList)

  //   const productExistInCart = this.cartProductList.find(({ name }) => name === this.itemList[value].name);
  //   console.log(productExistInCart)
  //   console.log(!productExistInCart)
  //   if (!productExistInCart) {
  //     this.cartProductList.push(this.itemList[value]); // enhance "porduct" opject with "num" property
  //     console.log('cpl', this.cartProductList)
  //     return; 
  //   }
  // } 
  products: Product[] = [
    { id: 1, name: 'Product 1', quantity: 1, price: 10 },
    { id: 2, name: 'Product 2', quantity: 2, price: 20 },
    // Add more products as needed
  ];

  updateTotal(): number {
    return this.products.reduce((total, product) => total + product.quantity * product.price, 0);
  }

  deleteItem(index: number): void {
    this.products.splice(index, 1);
  }

  updateQuantity(index: number, change: number): void {
    const newQuantity = this.products[index].quantity + change;
    
    if (newQuantity > 0) {
      this.products[index].quantity = newQuantity;
    }
  }


  availableProducts = ['Product A', 'Product B', 'Product C'];
  selectedProducts: { name: string, quantity: number }[] = [];

  addProduct(productName: string): void {
    const existingProductIndex = this.selectedProducts.findIndex(p => p.name === productName);

    if (existingProductIndex !== -1) {
      // If the product is already selected, increase the quantity
      this.selectedProducts[existingProductIndex].quantity++;
    } else {
      // If the product is not selected, add it to the selected products array
      this.selectedProducts.push({ name: productName, quantity: 1 });
    }
  }

  onclickImage(event: any, value: number) {
    console.log(event)
    console.log(value)
    console.log('1',this.cartProductList)

    const productExistInCart = this.cartProductList.find(({ name }) => name === this.itemList[value].name);
    console.log(productExistInCart)
    console.log(!productExistInCart)
    if (!productExistInCart) {
      this.cartProductList.push(this.itemList[value]); // enhance "porduct" opject with "num" property
      console.log('cpl', this.cartProductList)
      return; 
    }
  } 

  removeItem(event:any ,value:number) {
    console.log(event)
    console.log(value)
    this.cartProductList.splice(value, 1);
    console.log(this.cartProductList)
   }

   onclickplus(){
    console.log('Plus')
    this.quan++;
    console.log(this.quan)
  }

  onclicksub(){
    console.log('sub')
    this.quan--;
    console.log(this.quan)
  }
 
}

// removeProduct(product) {
//   this.cartProductList = this.itemList.filter(({ name }) => name !== product.name)
// }

// ngOnInit() {
//   this.bodyText = 'This text can be updated in modal 1';
// }

// openModal(id: string) {
//   this.modalService.open(id);
// }

// closeModal(id: string) {
//   this.modalService.close(id);
// }
// }



