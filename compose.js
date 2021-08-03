const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

// compose(add,sum,trim)
// f => add  g => sum
// add(sum(...args))

// f => add(sum(...args))  g => trim
// ...args => g(...args) => trim(...args)
// add(sum(trim(...args)))
