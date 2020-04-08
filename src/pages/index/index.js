import "./index.scss";
console.log("index");

const devMode = process.env.NODE_ENV != "production";
console.log("devMode", devMode);

function p() {
  return new Promise((resolve) => {
    resolve("success");
  });
}

p().then((res) => {
  console.log(res);
});
