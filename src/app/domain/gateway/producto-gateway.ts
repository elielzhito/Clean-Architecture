import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

export abstract class ProductoGateway {
  abstract getAll(): Observable<Producto[]>;
  abstract getById(id?: number): Observable<Producto>;
  abstract insert(producto: Producto): Observable<Producto>;
  abstract update(producto: Producto): Observable<Producto>;
  abstract delete(producto: Producto): Observable<Producto[]>;
}
