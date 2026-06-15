import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  result : any[] =  [];

   ngAfterViewInit() {
    this.informacion();
  }

  
  async informacion() {
    try {
      const response = await fetch('http://localhost:8085/ejercicio/api.php', {
        method: 'GET',
        headers: { 'Origin': window.location.origin },
      });

      this.result = await response.json();
      

    } catch (error) {
      console.error('Error peticion:', error);
    }
  }

  agregar(nombre:any, apellidos: any, edad:any){
    const ultimoId = this.result[this.result.length - 1].dato;
    
    this.result.push({
      dato: Number(ultimoId) + 1,
      nombre: nombre,
      apellidos: apellidos,
      edad: edad
    });
  }

  eliminar(a:any){
    this.result.splice(a, 1);
  }

}


