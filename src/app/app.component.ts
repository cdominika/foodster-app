import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(private titleService: Title,
                     private route: ActivatedRoute) {}

  public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
