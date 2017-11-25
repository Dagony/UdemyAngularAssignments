import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myAssignmentForm: FormGroup;
  projectStatus = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.myAssignmentForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required],this.forbiddenProjectNames),
      'mail' : new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus' : new FormControl(null)
    });
    this.myAssignmentForm.statusChanges.subscribe(
      (value) => {}
    );

  }

  onSubmit() {
    console.log(this.myAssignmentForm);
    // this.myAssignmentForm.reset();
  }

  forbiddenProjectNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any> ((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'projectNameIsForbidden':true});
        } else {
          resolve(null);
        }
      });
    });
    return promise;
  }
}
