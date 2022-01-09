function Log(target: any, propertyName: string | Symbol) {
	console.log('Property decorator!');
	console.log(target, propertyName);
}

function Log2(target: any, identification: string, descriptor: PropertyDescriptor) {
	console.log('Accessor decorator!');
	console.log('target', target);
	console.log('identification', identification);
	console.log('descriptor', descriptor);
}

function Log3(targets: any, identification: string | Symbol, descriptor: PropertyDescriptor) {
	console.log('Method decorator!');
	console.log('target', targets);
	console.log('identification', identification);
	console.log('descriptor', descriptor);
}
function Log4(target: any, name: string | Symbol, position: number) {
	console.log('Parameter decorator!');
	console.log(target);
	console.log(name);
	console.log(position);
  }

class Product {
	@Log
	title: string;
	private _price: number;

	@Log2
	set price(val: number) {
		if (val > 0) {
			this._price = val;
		} else {
			throw new Error('Invalid price - should be positive!');
		}
	}

	constructor(t: string, p: number) {
		this.title = t;
		this._price = p;
	}
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);
// access vs property vs method decorator. Example from udemy. Still review. https://www.knowledgehut.com/blog/web-development/decorators-angular