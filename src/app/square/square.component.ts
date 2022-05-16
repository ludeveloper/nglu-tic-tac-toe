import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button mat-raised-button *ngIf="!value">
      {{ value }}
    </button>
    <button mat-raised-button status="success" *ngIf="value == 'X'">
      {{ value }}
    </button>
    <button mat-raised-button status="info" *ngIf="value == 'O'">
      {{ value }}
    </button>
  `,
  styles: [
    `
      button,
      a {
        width: 100%;
        height: 100%;
        font-size: 7em !important;
        border: solid 1px #999;
        background-color: aliceblue;
        color: black;
      }
    `,
  ],
})
export class SquareComponent {
  @Input() value!: 'X' | 'O' | string;
}
