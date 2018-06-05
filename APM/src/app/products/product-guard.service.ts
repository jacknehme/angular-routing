import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductEditComponent } from './product-edit.component';

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable()
export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {
    canDeactivate(
        component: ProductEditComponent,
        // currentRoute: ActivatedRouteSnapshot, 
        // currentState: RouterStateSnapshot
    ): boolean
    // Observable<boolean>|Promise<boolean>|boolean {
    //     return false;
    // }
    {
        if (component.isDirty){
            let productName = component.product.productName || 'New Product';
            return confirm(`Navigate away and lose all changes to ${productName}?`);
        }
        return true;
    }
}