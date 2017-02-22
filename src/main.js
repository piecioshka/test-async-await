function fakeRequest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Date.now())
        }, 500);
    });
}

async function setup() {
    let current = await fakeRequest();
    console.log(current);
    return 'app is ready';
}

setup()
    .then((status) => {
        console.log(status);
    });
