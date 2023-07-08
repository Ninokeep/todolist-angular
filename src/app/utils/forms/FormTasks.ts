import { FormControl } from '@angular/forms';

export class FormTasks {
  title?: FormControl<string>;
  name?: FormControl<string>;
  finished?: FormControl<boolean>;
}
