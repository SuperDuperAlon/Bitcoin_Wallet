const user = {
    name: "Alon Mlievski",
    balance: 100,
    transactions: []
}

export const userService = {
    getUser
}

async function getUser() {
    console.log(user);
    return Promise.resolve(user)
}