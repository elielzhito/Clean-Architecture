import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

const routes: Routes = [
  {
    path: '',
    component: ListarProductoComponent,
  },
];

@NgModule({
  declarations: [ListarProductoComponent, CrearProductoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    MessageModule,
    MessagesModule,
  ],
  exports: [ListarProductoComponent, CrearProductoComponent],
  providers: [ConfirmationService, MessageService],
})
export class ProductoModule {}
