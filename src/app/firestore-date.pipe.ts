import { formatDate } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

@Pipe({
    name: 'firestoreDate'
})
export class FirestoreDatePipe implements PipeTransform {

    constructor(@Inject(LOCALE_ID) private locale: string) {
    }

    transform(timestamp: Timestamp, format?: string): string {
        if (!timestamp?.toDate()) {
            return;
        }
        return formatDate(timestamp.toDate(), format || 'medium', this.locale);
    }
}