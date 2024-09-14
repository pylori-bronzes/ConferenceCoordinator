const promiseAll = (promises) => { return new Promise((resolve, reject) => { if (!Array.isArray(promises)) { return reject(new TypeError('Argument must be an array')); } const results = new Array(promises.length); let unresolved = promises.length; if (unresolved === 0) { resolve(results); } promises.forEach((promise, index) => { Promise.resolve(promise).then((value) => { results[index] = value; unresolved -= 1; if (unresolved === 0) { resolve(results); } }, (reason) => { reject(reason); }); }); }); };