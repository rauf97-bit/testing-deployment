
function asyncFunx(){
  // Fetching department data
fetch("https://church-count.onrender.com/api/v1/Admin/Get/department")
.then(res => console.log(res))
.catch(error => console.error('Error:', error));

// Logging in as a worker
fetch("https://church-count.onrender.com/api/v1/auth/Login/Worker", {
method: "POST",
headers: {
    "Content-Type": "application/json"
},
body: JSON.stringify({
    "Email": "pauloo22@gmail.com",
    "Password": "password"
})
})
.then(res => res.json())
.then(data =>{
  console.log(data)
  if (data !== "") {
    window.location.href="payment.html"
  }
} 
)
.catch(error => console.error('Error:', error));


  // fetch("https://church-count.onrender.com/api/v1/Admin/Get/department").then( res => console.log(res))
  // fetch("https://church-count.onrender.com/api/v1/auth/Login/Worker", {
  //     method:"POST",
  //     body:{
  //         "Email" : "pauloo22@gmail.com",
  //         "Password": "password"
  //     }
  // }).then(
  //     res => console.log(res.json))

  // let res = await axios.get(
  //       "https://church-count.onrender.com/api/v1/Admin/Get/department"
  //     );
  //     console.log(res);
  //     const response = await axios.post(
  //       "https://church-count.onrender.com/api/v1/auth/Login/Worker",
  //       { Email: "pauloo22@gmail.com", Password: "password" }
  //     )
  //     console.log(response);
  //     if (response.data !== "") {
  //       window.location.href="payment.html"
  //     }
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
