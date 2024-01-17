import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



export interface DialogData {
  userName: string;
}

@Component({
  // selector: 'app-usename-dialog',
  templateUrl: './usename-dialog.component.html',
  styleUrls: ['./usename-dialog.component.scss']
})
export class UsenameDialogComponent {

  userName: string = '';

  constructor(
    public dialogRef: MatDialogRef<UsenameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
