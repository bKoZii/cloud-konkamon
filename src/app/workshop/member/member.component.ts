import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { IMember } from 'src/app/model/member.model';
import { MemberService } from 'src/app/services/member.service';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})

export class MemberComponent {

  member: IMember[];
  mModel = new IMember;
  constructor(private mService: MemberService) {
    this.retrieveData();
  }
  memberList: any;
  showModal: boolean = false;
  selectItem() {
    this.showModal = true;
  }
  retrieveData(): void {
    this.mService.retrieveData().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.memberList = data;
      console.log(this.memberList);
    });
  }
}