//navigation start

let navbarlinks = document.getElementById("navbar-links");
let burgerbutton = document.getElementById("burger-button");

burgerbutton.addEventListener("click", function() {
    navbarlinks.classList.toggle("active");
});



//navigation-end

//ajax

// let request = new XMLHttpRequest();
// request.addEventListener("load", function() {
//     console.log(this.responseText);
// });
// request.addEventListener("error", function() {
//     console.log(this.responseText);
// });
// request.open('GET', 'https://jsonplaceholder.typicode.com/albums');
// request.send();







function getUsers() {

    function render() {
        let response = this.responseText;
        let responseData = JSON.parse(response);
        console.log(responseData);

        let ul = document.createElement('ul');

        responseData.data.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item.first_name + ' ' + item.last_name + ' ' + item.email;

            ul.appendChild(li);
        });

        document.getElementById('api').appendChild(ul);
    }
    let requist = new XMLHttpRequest();
    requist.addEventListener('load', render);

    requist.open('GET', 'https://reqres.in/api/users?delay=3');
    requist.send();
}

getUsers();