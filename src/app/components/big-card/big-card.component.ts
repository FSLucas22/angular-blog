import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input() photo: string = "";
  @Input() photoAlt: string = "Main card image"
  @Input() title: string = "";
  @Input() cardLink: string = "#";
  @Input() description: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
