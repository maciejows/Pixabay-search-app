import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../image.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  space: string = " asd";
  query: string;
  images: Subscription;
  imagesFound: boolean = false;
  searching: boolean = false;
  temp: number;

  constructor(private _imageService: ImageService) { }

  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.hits;
  
    console.log(data.hits);
  }

  handleError(error) {
    console.log(error);
  }

  searchImg(query: string) {
    console.log(`searching: ${query}`);
    this.imagesFound = false;
    this.searching = true;
    this.images = this._imageService.getImages(query)
      .subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
      );
  }

  generateColspan(): number {
    return 1;
  }

  ngOnInit() {
  }

}
