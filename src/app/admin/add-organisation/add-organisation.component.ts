import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Organisation } from '../../organisation';
import { OrganisationService } from '../../organisation.service';

@Component({
  selector: 'app-add-organisation',
  templateUrl: './add-organisation.component.html',
  styleUrls: ['./add-organisation.component.css']
})
export class AddOrganisationComponent {

  organisation = new Organisation();
  submitted = false;

  constructor(
    private organisationService: OrganisationService,
    private location: Location
  ) { }

  newOrganisation(): void {
    this.submitted = false;
    this.organisation = new Organisation();
  }

 addOrganisation() {
   this.submitted = true;
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.organisation);
    this.organisationService.addorganisation(this.organisation)
        .subscribe();
  }




}
