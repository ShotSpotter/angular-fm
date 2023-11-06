import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {LoanRequest, LoanResult} from '../models/loan';

@Injectable()
export class LoanService {

  private _loan = new Subject<LoanResult | undefined | null>();

  onLoanRequest() {
    return this._loan.asObservable();
  }

  calculate(loan: LoanRequest | undefined | null) {
    this._calculate(loan);
  }

  private _calculate(loan: LoanRequest | undefined | null) {

  }

}
