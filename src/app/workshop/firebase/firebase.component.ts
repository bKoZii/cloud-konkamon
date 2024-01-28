import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Comment } from 'src/app/model/comment.model';
import { TestjaaService } from 'src/app/services/testjaa.service';
import { UsenameDialogComponent } from './usename-dialog/usename-dialog.component';
import { Location } from '@angular/common';


@Component({
	selector: 'app-firebase',
	templateUrl: './firebase.component.html',
	styleUrls: ['./firebase.component.scss']
})

export class FirebaseComponent implements OnInit {

	comments = new Comment();
	submitted: boolean;
	userName: string;
	dialogConfig: MatDialogConfig;
	dialogWithForm: MatDialogRef<UsenameDialogComponent>;

	constructor(private dialogModel: MatDialog, private TestjaaService: TestjaaService, private _location: Location) { }

	ngOnInit() {
		this.dialogForm();
	}

	dialogForm() {

		// Opening the dialog component
		const dialogWithForm = this.dialogModel.open(UsenameDialogComponent, {
			disableClose: true, autoFocus: true,
			data: { firstName: this.userName }
		});

		// When user close the dialog
		dialogWithForm.afterClosed().subscribe(result => {
			if (result) {
				this.userName = result.userName;
				this.comments.username = result.userName;
			} else { this._location.back(); }
		});
	}

	saveTutorial(): void {
		this.TestjaaService.create(this.comments).then(() => {
			this.submitted = true;
		});
	}

	newTutorial(name?: string): void {
		this.submitted = false;
		this.comments = new Comment();
		this.comments.username = name;
	}

}
