import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage';
import {DataBaseConnectorService} from '../services/data-base-connector/data-base-connector.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-image-galary',
  templateUrl: './image-galary.component.html',
  styleUrls: ['./image-galary.component.css']
})
export class ImageGalaryComponent implements OnInit, OnChanges {
  @Input() userUID;
  imageList: Observable<any>;

  constructor(private db: DataBaseConnectorService,
              private storage: AngularFireStorage) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.userUID) {
      if (this.userUID) {
        this.imageList = this.db.getCollection(this.userUID).valueChanges();
      } else {
        this.imageList = this.db.getCollection('public').valueChanges();
      }
    }
  }



}
