import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBaseConnectorService {

  constructor(private db: AngularFirestore) { }

  getCollection(collection: string): AngularFirestoreCollection<any> {
    return this.db.collection(collection);
  }


}
