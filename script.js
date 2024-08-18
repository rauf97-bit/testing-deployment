const { default: axios } = require("axios");

async function asyncFunx(){
    let res = await axios.get(
        "https://church-count.onrender.com/api/v1/Admin/Get/department"
      );
      console.log(res);
      const response = await axios.post(
        "https://church-count.onrender.com/api/v1/auth/Login/Worker",
        { Email: "pauloo22@gmail.com", Password: "password" }
      )
      console.log(response);
      if (response.data !== "") {
        window.location.href="payment.html"
      }
}
const form_1 = document.getElementById("form");
form_1.addEventListener("submit", (e) => {
  // let res;
  e.preventDefault();
  console.log("jef knfjn");
  asyncFunx()
  // fetch("https://church-count.onrender.com/api/v1/Admin/Get/department").then( res => console.log(res))
  // fetch("https://church-count.onrender.com/api/v1/auth/Login/Worker", {
  //     method:"POST",
  //     headers:"application/json",
  //     body:{
  //         Email : "pauloo22@gmail.com",
  //         Password: "password"
  //     }
  // }).then(
  //     res => console.log(res.json)
  // )
});
