import { PRODUCTOS_DATA } from './producto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoGateway } from 'src/app/domain/gateway/producto-gateway';
import { Producto } from 'src/app/domain/models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoApiService extends ProductoGateway {
  private productos: Producto[] = PRODUCTOS_DATA;

  getAll(): Observable<Producto[]> {
    return new Observable((observer) => {
      return observer.next(this.productos);
    });
  }

  getById(id?: number): Observable<Producto> {
    return new Observable((observer) => {
      return observer.next(this.productos.find((p) => p.IdProducto == id));
    });
  }

  insert(producto: Producto): Observable<Producto> {
    this.productos.push(producto);
    return new Observable((observer) => {
      return observer.next(producto);
    });
  }

  update(producto: Producto): Observable<Producto> {
    this.productos.forEach((e) => {
      if (e.IdProducto == producto.IdProducto) e = producto;
    });
    return new Observable((observer) => {
      return observer.next(producto);
    });
  }

  delete(producto: Producto): Observable<Producto[]> {
    const indice = this.productos.indexOf(producto);
    this.productos.splice(indice, 1);
    return new Observable((observer) => {
      return observer.next(this.productos);
    });
  }
}
