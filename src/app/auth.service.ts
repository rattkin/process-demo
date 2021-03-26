import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: Observable<any>;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) {

        this.user = this.afAuth.authState.pipe(
            switchMap(user => {
                // if (user) {
                //     return this.afs.collection(`admin`).valueChanges().pipe(
                //         map(admin => {
                //             if (admin instanceof Array && admin[0].email === user.email) {
                //                 return user;
                //             }
                //             return false;
                //         })
                //     );
                // } else {
                return of(user);
                // }
            })
        );
    }

    async googleSignin(): Promise<void> {
        const provider = new firebase.auth.GoogleAuthProvider();
        const credencial = await this.afAuth.signInWithPopup(provider);
        return this.updateUserData(credencial.user);
    }

    async signOut(): Promise<boolean> {
        await this.afAuth.signOut();
        return this.router.navigate(['/']);
    }

    private updateUserData(user: firebase.User | null): void {
        // TODO here i can set own user data
    }
}