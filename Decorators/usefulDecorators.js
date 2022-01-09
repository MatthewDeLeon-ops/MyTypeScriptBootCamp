var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString, 'logString');
        console.log(constructor, 'constructor');
    };
}
function useTemplate(template, hookId) {
    return function (constructor) {
        var hookEl = document.getElementById(hookId);
        var p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.component;
        }
    };
}
var components = /** @class */ (function () {
    function components() {
        this.component = 'Johnny Ives';
        console.log('testing this out...');
    }
    components = __decorate([
        useTemplate('<h1>My Person Object</h1>', 'app')
    ], components);
    return components;
}());
var utility = new components();
console.log(utility, 'utility');
