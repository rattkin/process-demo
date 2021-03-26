import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { ProcessEditorComponent } from './process-editor.component';


describe('ProcessEditorComponent', () => {
    let component: ProcessEditorComponent;
    let fixture: ComponentFixture<ProcessEditorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProcessEditorComponent],
            imports: [
                MatDialogModule,
                ReactiveFormsModule,
                AngularFirestore,
            ],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useValue: {} },
                { provide: AngularFirestore, useValue: FirestoreStub },
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProcessEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

const FirestoreStub = {
    collection: (name: string) => ({
        doc: (_id: string) => ({
            valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
            set: (_d: any) => new Promise<void>((resolve, _reject) => resolve()),
        }),
    }),
};