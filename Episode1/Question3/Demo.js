const add = (a, b) => a + b;

const memoizeAdd = memoizeOne(add);

memoizeAdd(1, 2); // 3

// Add function is called to get new value
memoizeAdd(1, 2); // 3
// Add function is not executed : previous result is returned

memoizeAdd(2, 3); // 5

// Add function is called to get new value
memoizeAdd(2, 3); // 5

// Add function is not executed : previous result is returned

function memoizeOne(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args); // Convert arguments to a string key
        // const key = args.join("_");

        if (cache.has(key)) {
            return cache.get(key); // Return cached result if it exists
        }

        const result = fn(...args); // Call the original function
        cache.set(key, result); // Store the result in the cache

        return result;
    };
}
