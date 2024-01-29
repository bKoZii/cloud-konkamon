import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMember } from 'src/app/model/member.model';
import { MemberService } from 'src/app/services/member.service';
declare var Swal: any;
@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styleUrls: ['./member-modal.component.scss'],

})

export class MemberModalComponent implements OnInit {

  member: IMember = new IMember();
  // mModel = new IMember;
  @Output()
  onClose = new EventEmitter();
  constructor(private mService: MemberService) {
    this.member.title = "นาย";
  }
  ngOnInit() { }
  closeModal() { this.onClose.emit(null); }

  submitForm() {
    this.mService.submitData(this.member).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'บันทึกข้อมูลสำเร็จ!',
        text: this.member.title + ' ' + this.member.fName + ' ' + this.member.lName,
        showConfirmButton: false,
        timer: 2000
      }).then(() => {
        this.closeModal();
      });
    });
    // this.mService.submitData(this.member).then(() => {
    //   Swal.fire({
    //     icon: 'success',
    //     text: 'บันทึกข้อมูลเรียบร้อยแล้ว!',
    //     showConfirmButton: false,
    //     timer: 1500
    //   }).then(() => {
    //     this.clearForm();
    //   });
    // });
  }

  clearForm() {
    this.member.address = '';
    this.member.title = 'นาย';
    this.member.fName = '';
    this.member.lName = '';
    this.member.email = '';
    this.member.mobileNum = '';
    this.member.lineID = '';
  }
}