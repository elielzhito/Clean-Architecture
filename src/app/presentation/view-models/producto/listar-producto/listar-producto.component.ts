import { ConfirmationService, MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/domain/models/producto';
import { ProductoUseCases } from 'src/app/domain/usecase/producto-use-case';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css'],
})
export class ListarProductoComponent implements OnInit {
  public listaProductos: Producto[] = [];
  constructor(
    private _productoUseCase: ProductoUseCases,
    private _confirmationMessagge: ConfirmationService,
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    const $data = this._productoUseCase.getAllProductos();
    $data.subscribe((producto: Producto[]) => (this.listaProductos = producto));
  }

  deleteProduct(producto: Producto): void {
    this._confirmationMessagge.confirm({
      message:
        'Esta seguro que desea eliminar el producto: ' +
        producto.Denominacion +
        ' ?',
      header: 'Eliminar Producto',
      acceptLabel: 'Si',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const $data = this._productoUseCase.deleteProducto(producto);
        $data.subscribe((productos: Producto[]) => {
          this.listaProductos = productos;
        });
      },
    });
  }
}
