import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface TableColumn<T> {
  name: string;
  prop: keyof T;
}

export interface Sorting<T> {
  prop: keyof T;
  direction: 'asc' | 'desc';
}

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent<Model> {

  @Input() redirectURL = '/clients';
  @Input() hasEdit = true;
  @Input() hasDelete = true;
  @Input() hasView = true;
  @Input() sortable = true;
  @Input() appliedSort: Sorting<Model> | null = null;
  @Output() sortEvent = new EventEmitter<Sorting<Model>|null>();
  @Output() editFunction = new EventEmitter<string>();
  @Output() deleteFunction = new EventEmitter<string>();


  @Input() columns!: TableColumn<Model>[]
  @Input() data: Model[] = [];


  constructor(
      public dialog: MatDialog,
  ) {}

  sortColumn(column: TableColumn<Model>) {
    if (!this.sortable) return;

    const prop = column.prop;
    if (this.appliedSort?.prop === prop) {
      if (this.appliedSort.direction === 'desc') {
        this.appliedSort = { prop, direction: 'asc' };
      } else {
        this.appliedSort = null;
      }
    } else {
      this.appliedSort = { prop: prop, direction: 'desc' };
    }

    this.sortEvent.emit(this.appliedSort);
  }


  confirmDelete(id: Model[keyof Model] | undefined) {
    if (!id) {
      this.dialog.open(DialogComponent, {
        data: {
          title: "Erro",
          message: "ID do usuário não encontrado.",
          buttons: ["OK"]
        }
      });
      return;
    }

    this.dialog.open(DialogComponent, {
      data: {
        title: "Deletar Usuário",
        message: "Deseja realmente deletar este usuário?",
        type: "boolean",
        buttons: ["Cancelar", "Deletar"]
      }
    }).afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.deleteFunction.emit((id as keyof Model).toString());
      }
    })
  }

}
