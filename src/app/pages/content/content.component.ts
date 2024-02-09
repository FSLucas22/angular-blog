import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() photo: string = "https://via.placeholder.com/900x400";
  @Input() photoAlt: string = "Content photo";
  @Input() title: string = "Content title";
  @Input() body: string = "Content body";
  constructor() { }

  ngOnInit(): void {
  }

}
