import { Injectable} from '@angular/core';
import { PagetwoComponent } from '../components/pagetwo/pagetwo.component';
import { CanActivate, CanActivateChild, CanDeactivate} from '@angular/router';

@Injectable()

export class AuthService implements CanActivate,
                                    CanActivateChild,
                                    CanDeactivate<PagetwoComponent>{

            canActivate():boolean{
                return confirm("Do you want to Enter into Page_three ?");
            }
            canActivateChild():boolean{
                return confirm("Do you want to enter into child one?")
            }
            canDeactivate():boolean{
                return confirm("DO you want to Leave page Two??")
            }
                                    }