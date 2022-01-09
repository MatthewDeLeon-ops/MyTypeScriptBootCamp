function Logger(logString: string) {
	return function(constructor: Function) {
	  console.log(logString,'logString');
	  console.log(constructor,'constructor');
	};
  }
  function useTemplate(template: string, hookId: string) {
	return function (constructor: any) {
		const hookEl = document.getElementById(hookId)
		const p = new constructor();
		if (hookEl) {
			hookEl.innerHTML = template;
			hookEl.querySelector('h1')!.textContent = p.component
		}
	}
}

@useTemplate('<h1>My Person Object</h1>', 'app')
class components {
	component = 'Johnny Ives';

  constructor() {
		console.log('testing this out...');
}
}

const utility = new components();

console.log(utility,'utility');
