# test-async-await

:ledger: Use ES2017 syntax to write async code in sync approach.

## Demo 🎉

<https://piecioshka.github.io/test-async-await/demo/>

## Source code

File: `./src/main.js`

```javascript
function fakeRequest() {
    const response = Date.now(); // fake data
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(response);
        }, 500);
    });
}

async function setup() {
    const response = await fakeRequest();
    console.log(response);
    return 'app is ready';
}

setup()
    .then((status) => {
        console.log(status);
    })
    .catch((err) => {
        console.error(err);
    });
```

DevTools logs:

```text
> 1487801656244
> 'app is ready'
```

## Support

* Google Chrome v56.0.2924.87 (64-bit)

_**If the feature is supported fork project and append your browser.**_

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2017
