import { Component, OnInit } from '@angular/core';
import { Mision } from 'src/app/entities/mision';
import { MisionesService } from 'src/app/services/misiones.service';

@Component({
  selector: 'app-misiones',
  templateUrl: './misiones.component.html',
  styleUrls: ['./misiones.component.css'],
})
export class MisionesComponent implements OnInit {
  listaMisiones: Mision[] | undefined;
  constructor(private misionService: MisionesService) {}
  ngOnInit(): void {
    this.misionService.misionesAll().subscribe((res) => {
      console.log(res);
      this.listaMisiones = JSON.parse(JSON.stringify(res));
    });
  }
}
