import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;
export interface Process {
    date?: Timestamp;
    product?: string;
    quantity: number;
    person?: string;
}