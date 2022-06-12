import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { Process } from '../shared/interface/process.interface';
import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  public dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['date', 'product', 'quantity', 'person'];

  form = this.formBuilder.group({
    dateFrom: new UntypedFormControl('', [Validators.required]),
    dateTo: new UntypedFormControl('', [Validators.required]),
  });

  public graphData: GraphItem[];
  multi: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;

  colorScheme = {
    domain: '#8e5f3b',
  };

  constructor(
    private store: AngularFirestore,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((form) => {
      this.store
        .collection<Process>('process', (ref) =>
          ref
            .where('date', '>', moment(form.dateFrom).startOf('day').toDate())
            .where('date', '<', moment(form.dateTo).endOf('day').toDate())
        )
        .valueChanges()
        .subscribe((data) => {
          this.dataSource = new MatTableDataSource(data);
          this.processGraphData(data);
        });
    });

    this.form.patchValue({
      dateFrom: new Date(),
      dateTo: new Date(),
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  processGraphData(input: Process[]): void {
    this.graphData = [...emptyGraphData];
    this.graphData.forEach((item) => (item.value = 0));
    input.forEach((process) => {
      this.graphData.find((hour) => {
        return hour.name === moment(process.date?.toDate()).hour().toString(10);
      }).value += process.quantity;
    });
  }
}

export type GraphItem = {
  name: string;
  value: number;
};

export const emptyGraphData = [
  { name: '1', value: 0 },
  { name: '2', value: 0 },
  { name: '3', value: 0 },
  { name: '4', value: 0 },
  { name: '5', value: 0 },
  { name: '6', value: 0 },
  { name: '7', value: 0 },
  { name: '8', value: 0 },
  { name: '9', value: 0 },
  { name: '10', value: 0 },
  { name: '11', value: 0 },
  { name: '12', value: 0 },
  { name: '13', value: 0 },
  { name: '14', value: 0 },
  { name: '15', value: 0 },
  { name: '16', value: 0 },
  { name: '17', value: 0 },
  { name: '18', value: 0 },
  { name: '19', value: 0 },
  { name: '20', value: 0 },
  { name: '21', value: 0 },
  { name: '22', value: 0 },
  { name: '23', value: 0 },
  { name: '24', value: 0 },
];
