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
