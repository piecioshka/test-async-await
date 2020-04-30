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
