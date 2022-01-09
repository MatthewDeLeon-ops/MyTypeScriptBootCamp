var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function TestingFn(targetarg) {
    console.log('the function invokes here');
    console.log('targetarg', targetarg);
}
var Doctor = /** @class */ (function () {
    function Doctor() {
        this.doctorID = 'J39108MROD';
        console.log('Creating an Object');
    }
    Doctor = __decorate([
        TestingFn
    ], Doctor);
    return Doctor;
}());
var doctorID = new Doctor();
console.log(doctorID);
