import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Comment } from '../model/comment.model';

@Injectable({
  providedIn: 'root'
})
export class TestjaaService {
  private dbPath = '/comments';

  commentsRef: AngularFireList<Comment>;

  constructor(private db: AngularFireDatabase) {
    this.commentsRef = db.list(this.dbPath, (ref => ref.orderByChild('dataPosted')));
  }

  getAll(): AngularFireList<Comment> {
    return this.commentsRef;
  }

  create(tutorial: Comment): any {
    return this.commentsRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.commentsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.commentsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.commentsRef.remove();
  }
}
