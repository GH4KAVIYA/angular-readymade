import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent  {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name : '',
    address : ''
  })
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
 onSubmit(): void {
   alert('submitted')
   this.items = this.cartService.clearCart();
   console.log('ORDER SUBMITTED');
   this.checkoutForm.reset();
 }
}