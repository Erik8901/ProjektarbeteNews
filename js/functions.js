window.addEventListener("load", twitterTest)

    function twitterTest() {
        
        
        let btn1 = document.getElementById("btn1");
        let twitterDiv = document.getElementById("twitterDiv");
        let link = "https://github.com/login/oauth/authorize";
        
        var myHeaders = new Headers();

        var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default',
               client_id: "0fc759801434fe7ffcfe",
               client_secret: "73f9e5a433fc446727a1be7dd1a728ccdcfb9f28",
               scope: "repo",
               state: "lolhej",
               allow_signup: "false"
            };

        var myRequest = new Request(myInit);
        
        
        btn1.addEventListener("click", function() {
          
   /* GET https://erik8901.github.io/ProjektarbeteNews/
    GET https://github.com/login/oauth/authorize?0fc759801434fe7ffcfe */
            
          var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
                console.log("hej")
      twitterDiv.innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "myInit", true);
xhttp.send();
        
        
        
        
        })
        
        
        
        
        
        
    } []