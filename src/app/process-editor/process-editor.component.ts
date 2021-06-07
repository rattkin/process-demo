import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import firebase from 'firebase/app';
import { AuthService } from '../auth.service';
import { Process } from '../shared/interface/process.interface';
import { Product } from '../shared/interface/product.interface';
import Timestamp = firebase.firestore.Timestamp;


@Component({
    selector: 'app-process-editor',
    templateUrl: './process-editor.component.html',
    styleUrls: ['./process-editor.component.scss']
})
export class ProcessEditorComponent implements OnInit {

    public process: Process;
    public product: Product;

    form = this.formBuilder.group({
        quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<ProcessEditorComponent>,
        private formBuilder: FormBuilder,
        private store: AngularFirestore,
        public auth: AuthService
    ) { }

    ngOnInit(): void {
        this.product = this.data.product;
    }

    cancel(): void {
        this.dialogRef.close();
    }
    
    submit(): void {
        this.auth.user.subscribe(user => {

            this.process = {
                product: this.data.product.id,
                quantity: this.form.controls.quantity.value,
                date: Timestamp.now(),
                person: user.email
            };
            if (this.form.valid) {
                this.store.collection<Process>('process').add(this.process);
                this.dialogRef.close();
            } else {
                this.markFormGroupTouched(this.form);
            }
        })
    }

    /**
    * Marks all controls in a form group as touched
    * @param formGroup - The form group to touch
    */
    private markFormGroupTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach(control => {
            control.markAsTouched();

            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }
}