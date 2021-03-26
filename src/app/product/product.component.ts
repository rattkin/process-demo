import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProcessEditorComponent } from '../process-editor/process-editor.component';
import { Process } from '../shared/interface/process.interface';
import { Product } from '../shared/interface/product.interface';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    @Input() product: Product;

    public quantityToday: Observable<number>;

    constructor(
        private dialog: MatDialog,
        private store: AngularFirestore,
    ) { }

    showProcessEditor(product: Product) {
        this.dialog.open(ProcessEditorComponent, {
            data: {
                product: product
            }
        });
    }

    ngOnInit(): void {
        if (this.product?.id) {
            this.quantityToday = this.store.collection<Process>('process', ref => ref
                .where(
                    "date", ">", moment().startOf('day').toDate()
                )
                .where(
                    "date", "<", moment().endOf('day').toDate()
                )
                .where(
                    "product", "==", this.product.id
                )
            )
                .valueChanges()
                .pipe(
                    map(data => {
                        if (data && data.length) {
                            return data.map(process => process.quantity).reduce((a, b) => a + b)
                        } else {
                            return 0;
                        }
                    })
                )
        }

    }
}
