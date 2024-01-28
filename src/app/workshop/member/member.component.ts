import { Component } from '@angular/core';
import { MemberModalComponent } from './member-modal/member-modal.component';
declare var Swal: any;

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})

export class MemberComponent {
  
  showModal: boolean = false;
  selectItem() {
    this.showModal = true;
  }
}