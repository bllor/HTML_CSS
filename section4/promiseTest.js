const runCode = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = 10;
    if (num > 9) {
      resolve(num);
    } else {
      reject("error");
    }
  }, 1000);
});

// runCode.then(
//   (item) => {
//     console.log("success", item);
//   },
//   (err) => {
//     console.log("fail", err);
//   }
// );
// console.log("test");
//runCode.then으로 코드가 실행이 되고 num이 9보다 크면 resolve에 해당되는 함수가 실행이 되고,
//9보다 작으면 reject에 해당되는 함수가 실행이 된다.
//promise는 해당코드 내에 있는 것만 동기적으로 실행
/*
 
runCode.then(
  (item) => {
    console.log("success", item);
  },
  (err) => {
    console.log("fail", err);
  }
);
console.log("test");


console.log("test"); 이것도 동기적으로 실행하고 싶으면
runCode.then(
  (item) => {
    console.log("success", item);
  },
  (err) => {
    console.log("fail", err);
  }
).then(
    ()=>{console.log('test')}
)
이렇게 then으로 연결하면 동기적으로 된다.
*/

runCode
  .then((num) => {
    console.log("1", num);
    throw newError("error");
  })

  .catch(() => {
    console.log("error");
  })
  .finally(() => {
    console.log("finally");
  });
