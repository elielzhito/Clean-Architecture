import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoGateway } from '../gateway/producto-gateway';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoUseCases {
  constructor(private _productoGateway: ProductoGateway) {}

  getAllProductos(): Observable<Producto[]> {
    return this._productoGateway.getAll();
  }

  getProductoById(IdProducto: number): Observable<Producto> {
    return this._productoGateway.getById(IdProducto);
  }

  insertProducto(producto: Producto): Observable<Producto> {
    return this._productoGateway.insert(producto);
  }

  updateProducto(producto: Producto): Observable<Producto> {
    return this._productoGateway.update(producto);
  }

  deleteProducto(producto: Producto): Observable<Producto[]> {
    return this._productoGateway.delete(producto);
  }
}
