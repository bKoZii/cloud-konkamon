import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-workshopcard',
  templateUrl: './workshopcard.component.html',
  styleUrls: ['./workshopcard.component.scss']
})
export class WorkshopcardComponent {
  @Input() title?: string = "Placeholder จ้า";
  @Input() desc?: string = "Placeholder จ้า";
  @Input() link?: string;
  @Input() image?: string = "assets/me1.jpg";
}
