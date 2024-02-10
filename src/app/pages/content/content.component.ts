import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, getById } from 'src/app/data/fake-data';

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

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        let id: string = params.get('id') || "0";
        const data: Post = getById(id);
        this.setData(data);
      }
    );
  }

  private setData(data: Post): void {
    this.photo = data.photo;
    this.photoAlt = data.photoAlt;
    this.title = data.title;
    this.body = data.description;
  }
}
