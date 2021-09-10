import {Injectable} from "@angular/core";
import {MomentDateAdapter} from "@angular/material-moment-adapter";
import {DatePickerService} from "./date-picker.service";
import * as moment from "moment";

@Injectable()
export class DefaultDatePickerAdapter extends MomentDateAdapter {

  constructor(private _datePickerService: DatePickerService) {
    super('en-US');
  }

  parse(value: any, parseFormat: string | string[]): moment.Moment | null {
    return moment(value.replaceAll(/\s/g), this._datePickerService.FORMAT_DEFAULT, true);
  }

  public format(date: moment.Moment, displayFormat: string): string {
    const locale = this._datePickerService.getLocale();
    return date.locale(locale).format(this._datePickerService.FORMAT_DEFAULT);
  }
}
