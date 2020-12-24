let btn = document.querySelector('#facebook');
let img = document.querySelector('#img');
let h2 = document.querySelector('#name');

function login(){
  var provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider).then(data => {
    console.log(data.user);
    img.src = data.user.photoURL
    img.style.display = "block"
    h2.innerText = data.user.displayName
    btn.remove()
  });
}

btn.onclick = login