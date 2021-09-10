import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class DatePickerService {

  // Currently using default format as below. Add more if needed.
  public FORMAT_DEFAULT = 'MM/DD/YYYY';

  public getLocale(): string {
    return "en-US";
  }

}
