import { Component, OnInit } from '@angular/core';
import { ItemCanje } from 'src/app/entities/itemCanje';
import { RecompensaService } from 'src/app/services/recompensa.service';

@Component({
  selector: 'app-canje',
  templateUrl: './canje.component.html',
  styleUrls: ['./canje.component.css'],
})
export class CanjeComponent implements OnInit {
  listaItemsRecompensas: ItemCanje[] | undefined;
  ngOnInit(): void {
    let carritoStorage = localStorage.getItem('carrito') as string;
    let carrito = JSON.parse(carritoStorage);
    this.listaItemsRecompensas = carrito;
  }
  vaciarCarrito() {
    localStorage.clear();
    this.listaItemsRecompensas = [];
  }
}
