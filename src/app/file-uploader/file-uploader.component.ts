import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { DataBaseConnectorService } from '../services/data-base-connector/data-base-connector.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/internal/operators';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent {
  @Input()
  userUID = null;
  @Input()
  userName = null;
  isPublic = false;
  processStatus: Observable<number>;
  showSpinner = false;

  constructor(
    private storage: AngularFireStorage,
    private db: DataBaseConnectorService
  ) {}

  uploadFile(event) {
    this.showSpinner = true;
    const file = event.target.files[0];
    const filePath = `${
      this.isPublic ? 'public' : this.userUID
    }/${new Date().getTime() + file.name}`;
    const fileRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file);
    this.processStatus = uploadTask.percentageChanges();

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() =>
          fileRef.getDownloadURL().subscribe(url => {
            this.addUserFile(file.name, url);
            this.showSpinner = false;
            this.isPublic = false;
          })
        )
      )
      .subscribe();
  }

  lola(data) {
    console.log(data);
  }

  addUserFile(fileName: string, url: string) {
    if (!this.isPublic && this.userUID) {
      this.db
        .getCollection(this.userUID)
        .add({ fileName: fileName, path: url, user: this.userName });
    } else {
      this.db
        .getCollection('public')
        .add({ fileName: fileName, path: url, user: this.userName });
      this.db
        .getCollection(this.userUID)
        .add({ fileName: fileName, path: url, user: this.userName });
    }
  }
}
