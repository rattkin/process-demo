import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
    let component: SigninComponent;
    let fixture: ComponentFixture<SigninComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SigninComponent],
            providers: [
                { provide: AngularFireAuth, useValue: angularFireAuthStub },
            ],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SigninComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

const angularFireAuthStub = {
    authState: new BehaviorSubject({}),
    auth: {
        signInWithPopup: jasmine.createSpy('signInWithPopup')
    },
};