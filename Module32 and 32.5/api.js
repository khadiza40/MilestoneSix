function loaddata() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    
}
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data));
    
}
function displayUser(data){
    const ol= document.getElementById('user');
for (const user of data ){
    console.log(user.name);
    const li = document.createElement('li');
    li.innerText =`name: ${user.name}   email: ${user.email}`;
    ol.appendChild(li);
}
}




