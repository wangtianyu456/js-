function call(context, ...args) {
  context = context || window;
  context.fn = this;
  const res = context.fn(...args);
  delete context.fn;
  return res;
}

function apply(context, args) {
  context = context || window;
  context.fn = this;
  const res = context.fn(...args);
  delete context.fn;
  return res;
}

function bind(context, args) {
  context = context || window;
  const fn = this;
  const F = function () {};
  F.prototype = this.prototype;

  const bound = function (...finalArgs) {
    return fn.apply(this instanceof F ? this : context, [
      ...args,
      ...finalArgs,
    ]);
  };

  bound.prototype = new F();
  return bound;
}
