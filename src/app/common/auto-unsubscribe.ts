export function AutoUnsubscribe(constructor: Function): void {
  const original = constructor.prototype.ngOnDestroy;

  constructor.prototype.ngOnDestroy = function () {
    for (const prop in this) {
      const property = this[prop];
      if (property && typeof property.unsubscribe === 'function') {
        property.unsubscribe();
        console.log(`Unsubscribed from ${property.constructor.name}.`);
      }
    }
    original?.apply(this, arguments);
  };
}
