const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("reject"));
const promise3 = new Promise((resolve, reject) => resolve("Reject2"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response))