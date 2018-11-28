import {Injectable} from '@angular/core';
import {ApiService} from '../../../../../backend/api.service';

@Injectable({
  providedIn: 'root'
})
export class PlSetupNameValidationService {

  constructor(private api: ApiService) {
  }
}
