import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
declare var Swal: any;
@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styleUrls: ['./member-modal.component.scss'],

})

export class MemberModalComponent implements OnInit{
  member = {
    title: 'นาย',
    fName: '',
    lName: '',
    email: '',
    mobileNum: '',
    lineID: '',
    address: ''
  }
  mService = new MemberService;
  @Output()
  onClose = new EventEmitter();
  constructor() { }
  ngOnInit() { }
  closeModal() { this.onClose.emit(null); }

  submitForm() {
    this.mService.submitData(this.member);
    Swal.fire({
      icon: 'success',
      title: 'บันทึกข้อมูลสำเร็จ!',
      text: this.member.title + ' ' + this.member.fName + ' ' + this.member.lName, 
      showConfirmButton: false,
      timer: 2000
    }).then(() => {
      this.closeModal();
    });
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