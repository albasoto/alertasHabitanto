import { __decorate } from "tslib";
import { Component } from '@angular/core';
import 'firebase/database';
let AlertComponent = class AlertComponent {
    constructor(db) {
        this.title = 'firebase';
        this.items = db.list('alerta').valueChanges();
        this.items.subscribe(res => {
            console.log(res);
        });
    }
    ngOnInit() {
    }
};
AlertComponent = __decorate([
    Component({
        selector: 'app-alert',
        templateUrl: './alert.component.html',
        styleUrls: ['./alert.component.css']
    })
], AlertComponent);
export { AlertComponent };
//# sourceMappingURL=alert.component.js.map