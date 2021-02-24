import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { KnobModule } from 'primeng/knob';
import Folder from 'src/app/models/Folder.model';
import { FolderService } from 'src/app/services/folder-service/folder.service';
@Component({
  selector: 'app-single-folder',
  templateUrl: './single-folder.component.html',
  styleUrls: ['./single-folder.component.css']
})
export class SingleFolderComponent implements OnInit {


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
    this.folderService.save(new Folder(this.folderName)).subscribe((response :any)=> console.log(response))
      this.getFolder();
    this.nextStep();
  }

  getFolder(){
    this.folderService.getFoldersMain().subscribe((response:any) => {
      this.folders = response 
      console.log(response)

    })
  }
  
}
