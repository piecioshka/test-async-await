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
