# async-await-example

:ledger: Use ES2017 syntax to write async code in sync approach.

## Demo 🎉

<https://piecioshka.github.io/async-await-example/>

## Source code

```js
// main.js
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
    console.log(response); // 1487801656244
    return 'app is ready';
}

setup()
    .then((status) => {
        console.log(status); // 'app is ready'
    })
    .catch((err) => {
        console.error(err);
    });
```

DevTools Console:

```text
> 1487801656244
> 'app is ready'
```

## Support

* Google Chrome v56.0.2924.87 (64-bit)

More details on [Can I use](https://caniuse.com/#feat=async-functions).

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2017
