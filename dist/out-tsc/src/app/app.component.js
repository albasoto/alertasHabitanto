import { __decorate } from "tslib";
import { Component } from '@angular/core';
import 'firebase/database';
let AppComponent = class AppComponent {
    constructor(db) {
        this.title = 'firebase';
        this.items = db.list('alerta').valueChanges();
        this.items.subscribe(res => {
            console.log(res);
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map