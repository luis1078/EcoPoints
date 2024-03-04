import { Component, OnInit } from '@angular/core';
import { ItemCanje } from 'src/app/entities/itemCanje';
import { Recompensa } from 'src/app/entities/recompensa';
import { RecompensaService } from 'src/app/services/recompensa.service';

@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.component.html',
  styleUrls: ['./recompensas.component.css'],
})
export class RecompensasComponent implements OnInit {
  listaRecompensa: Recompensa[] | undefined;
  constructor(private recompensaService: RecompensaService) {}
  ngOnInit(): void {
    this.recompensaService.recompensasAll().subscribe((res) => {
      console.log(res);
      this.listaRecompensa = JSON.parse(JSON.stringify(res));
    });
  }
  agregarCarrito(item: Recompensa) {
    let iCarrito: ItemCanje = {
      idrecompensa: item.id,
      nombre: item.nom_recompensa,
      puntos: Number(item.puntos_recompensa),
      cantidad: 1,
    };
    if (localStorage.getItem('carrito') === null) {
      let carrito: ItemCanje[] = [];
      carrito.push(iCarrito);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    } else {
      let carritoStorage = localStorage.getItem('carrito') as string;
      let carrito = JSON.parse(carritoStorage);
      let index = -1;
      for (let i = 0; i < carrito.length; i++) {
        let itemC: ItemCanje = carrito[i];
        if (iCarrito.idrecompensa === itemC.idrecompensa) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        carrito.push(iCarrito);
        localStorage.setItem('carrito', JSON.stringify(carrito));
      } else {
        let itemCarrito: ItemCanje = carrito[index];
        itemCarrito.cantidad!++;
        carrito[index] = itemCarrito;
        localStorage.setItem('carrito', JSON.stringify(carrito));
      }
    }
  }
}
