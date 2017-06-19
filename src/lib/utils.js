export const partial = (fn, ...args) => fn.bind(null, ...args)

export const _pipe = (fn, g) => (...args) => g(fn(...args))

export const pipe = (...fns) => fns.reduce(_pipe)
