import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Product } from '../shared/interface/product.interface';
import { PRODUCTS } from '../shared/mock/products.mock';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    public products: Product[];
    private group = this.route.snapshot.paramMap.get('id')

    constructor(
        private store: AngularFirestore,
        private route: ActivatedRoute,
        private auth: AuthService,
    ) {

    }

    private mock = PRODUCTS;

    ngOnInit(): void {
        this.store.collection<Product>('products', ref => ref
            .where(
                "category", "==", this.group
            )
        )
            .valueChanges(
                { idField: 'id' }
            ).subscribe(products =>
                this.products = products

            )



        // TODO sink

        // TODO import to firebase
        // this.auth.user.subscribe(
        //     user => {
        //         this.mock.forEach(product => {
        //             const id = product?.id;
        //             delete product.id;
        //             this.store.collection('products').doc(id).set(product)
        //         })
        //     }
        // )
    }

}
