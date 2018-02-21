window.onload = function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    let commentContainer = document.getElementsByClassName("commentContainer")[0];
    let commentButton = document.getElementById("commentButton");
    let loginBtn = document.getElementById("login");
    let logoutBtn = document.getElementById("logout");
    let profileContainer = document.getElementsByClassName("profileContainer")[0];

    loginBtn.addEventListener("click", function(event){
        console.log("Clicked login");
        firebase.auth().signInWithPopup(provider).then(function(result){
            profileContainer.children[0].innerText = result.user.displayName;
            profileContainer.children[1].src = result.user.photoURL;
        }).catch(function(error){
        console.log("Error: " + error);
        })
    });
    logoutBtn.addEventListener("click", function(event){
        console.log("Clicked logout");
        firebase.auth().signOut().then(function(){
            console.log("Signed out");
        }).catch(function(error){
        console.log("Error: " + error);
        })
    });
};