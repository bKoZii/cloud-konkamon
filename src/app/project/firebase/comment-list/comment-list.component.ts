import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { TestjaaService } from 'src/app/services/testjaa.service';
import { Comment } from 'src/app/model/comment.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})

export class CommentListComponent implements OnInit {
  comments?: Comment[];
  currentComment?: Comment;
  currentIndex = -1;
  content = '';


  constructor(private TestjaaService: TestjaaService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  refreshList(): void {
    this.currentComment = undefined;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.TestjaaService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.comments = data;
    });
  }

  setActiveTutorial(comment: Comment, index: number): void {
    this.currentComment = comment;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.TestjaaService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }
}