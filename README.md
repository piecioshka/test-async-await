# test-async-await

:ledger: Use ES2017 syntax to write async code in sync approach.

## Demo 🎉

<https://piecioshka.github.io/test-async-await/>

## Source code

```js
// main.js
function delay(time = 500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Date.now());
    }, time);
  });
}

async function main() {
  console.log(Date.now()); // 1661696288516
  const currentTime = await delay(1000);
  console.log(currentTime); // 1661696289519
  return "app is ready";
}

main()
  .then((status) => {
    console.log(status); // 'app is ready'
  })
  .catch((err) => {
    console.error(err);
  });

```

## Support

* Google Chrome v56.0.2924.87 (64-bit)

More details on [Can I use](https://caniuse.com/#feat=async-functions).

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2017
