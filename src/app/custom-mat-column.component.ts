import { Component, Directive, Input, ContentChild, TemplateRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: 'custom-mat-column',
})
export class CustomMatColumnComponent {
  @Input() public columnName: string;
  @ContentChild(TemplateRef) public columnTemplate: TemplateRef<any>;
}