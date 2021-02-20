import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import Folder from 'src/app/models/Folder.model';
import { FolderService } from 'src/app/services/folder-service/folder.service';

@Component({
  selector: 'app-create-folder',
  templateUrl: './create-folder.component.html',
  styleUrls: ['./create-folder.component.css']
})
export class CreateFolderComponent implements OnInit {
  // @ViewChild(MatAccordion) accordion: MatAccordion;
  
  data = {
    labels: ['A','B','C'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]    
    };

  constructor(private folderService :FolderService) { }
  display = false;
  folderName: any;
  ngOnInit(): void {
    this.getFolder();
 
  }
  folders : Folder[] = [];
  notes = [
    {
      name: 'Vacation Itinerary',
      date_register: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      date_register: new Date('1/18/16'),
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

  save(){
    console.log(this.folderName)
    this.folderService.save(new Folder(this.folderName)).subscribe(response => console.log(response))
      this.getFolder();
    this.nextStep();
  }

  getFolder(){
    this.folderService.getFoldersMain().subscribe(response => {
      this.folders = response 
      console.log(response)

    })
  }
  

}
