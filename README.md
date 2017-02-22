# test-async-await

> :ledger: Use ES2017 syntax to write async code in sync approach.

## Full code

File: `./src/main.js`

```javascript
function fakeRequest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Date.now());
        }, 500);
    });
}

async function setup() {
    let current = await fakeRequest();
    console.log(current);       // 1487801656244
    return 'app is ready';
}

setup()
    .then((status) => {
        console.log(status);    // `app is ready`
    });
```

DevTools logs:

```cmd
main.js:11 1487801656244
main.js:17 app is ready
```

## Support

* Google Chrome v56.0.2924.87 (64-bit)

**Fork project and append your browser (with version) if feature is supported.**

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2017
