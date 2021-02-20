import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {
  data4 = [
    {
        "id": 1,
    "title": "All Day Event",
    "start": "2017-02-01"
    },
  {
        "id": 2,
    "title": "Long Event",
    "start": "2017-02-07",
    "end": "2017-02-10"
    },
  {
    "id": 3,
    "title": "Repeating Event",
    "start": "2017-02-09T16:00:00"
    },
  ]

  data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: '#FFB06D',
            borderColor: '#1E88E5',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: '#9C4AFF',
            borderColor: '#7CB342',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
}

data1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
      },
      {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
      }
  ]
}

data3 = [{
  label: 'Nubank',
  children: [
      {
          label: 'Lucas',
          children: [
              {
                  label: 'Grandchild 1.1'
              },
              {
                  label: 'Grandchild 1.2'
              }
          ]
      },
      {
          label: 'João',
          children: [
              {
                  label: 'Child 2.1'
              },
              {
                  label: 'Child 2.2'
              },
              {
                label: 'Child 2.2'
            },
            {
              label: 'Child 2.2'
          }
          ]
      },
      {
        label: 'Nayla',
        children: [
            {
                label: 'Child 2.1'
            },
            {
                label: 'Child 2.2'
            }
        ]
    }
  ]
}];


  constructor() { }

  ngOnInit(): void {
  }

}
