import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { KnobModule } from 'primeng/knob';
@Component({
  selector: 'app-single-folder',
  templateUrl: './single-folder.component.html',
  styleUrls: ['./single-folder.component.css']
})
export class SingleFolderComponent implements OnInit {

  public items: MenuItem[] = [];
  public home: MenuItem = {};
  data: any;
  options: any;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Computer' },
      { label: 'Notebook' },
      { label: 'Accessories' },
      { label: 'Backpacks' },
      { label: 'Item' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.data = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#9b59b6",
            "#485460",
            "#05c46b",
            "#2f3640",
            "#d35400",
            "#D99066",
            "#1F1F1F",
            "#FFFFFF",
            "#675646"
          ],
        }

      ]
    }
    this.options = {
      title: {
        display: true,
        text: 'Total de gasto ao mês',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    };

  }

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  save() {

  }
}
