import { Component, Input, ContentChildren, TemplateRef, QueryList, AfterContentInit } from '@angular/core';

import { CustomMatColumnComponent } from './custom-mat-column.component';
import { TableColumn } from './table-column';

@Component({
  selector: 'custom-mat-table',
  templateUrl: 'custom-mat-table.component.html',
})
export class CustomMatTableComponent implements AfterContentInit {
  public get columnTemplates(): { [key: string]: TemplateRef<any> } {
    if (this.columnDefinitions != null) {
      const columnTemplates: { [key: string]: TemplateRef<any> } = {};
      for (const columnDefinition of this.columnDefinitions.toArray()) {
        columnTemplates[columnDefinition.columnName] = columnDefinition.columnTemplate;
      }
      return columnTemplates;
    } else {
      return {};
    }
  };
  @Input() tableColumns: TableColumn[] = [];
  @Input() tableDataSource: [] = [];
  @ContentChildren(CustomMatColumnComponent) columnDefinitions: QueryList<CustomMatColumnComponent>;
  public get displayedColumns() {
    return this.tableColumns.map((tableColumn) => tableColumn.displayCol)
  }

  public ngAfterContentInit() {
    for (const columnDefinition of this.columnDefinitions.toArray()) {
      console.log(columnDefinition);
      this.columnTemplates[columnDefinition.columnName] = columnDefinition.columnTemplate;
    }
    console.log(this.columnTemplates);
  }

  public onCellClick(e: any, options?: any) {
    console.log(this.columnDefinitions);
  }
}
