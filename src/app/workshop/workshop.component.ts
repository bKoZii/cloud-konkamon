import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {

  constructor(private router: Router
  ) { }
  ngOnInit(): void {
  }

  isMainWorkshopRoute() {
    return this.router.url === '/workshop';
  }
  myProps = { waitFor: true, message: 'foo' };

}
