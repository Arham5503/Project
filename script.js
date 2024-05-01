        function home() {
            window.location.assign("index.html");
        }
        function blog(){
            window.location.assign("blog.html");
        }
        function work(){
            window.location.assign("works.html");
        }
        function contact(){
            window.location.assign("contact.html");
        }
        function func() {
            var x = document.getElementById("cont");
            console.log("clicked")
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }










        
        // Primary     rgba(1,169,205,255) #01a9cd
        // Secondry    #fd6568   rgba(253,101,104,255)
        // Dark        #22243e   rgba(34,36,62,255)
        // Light       #8796a4   rgba(135,150,164,255)


        // function func() {
        //     var x = document.getElementById("cont");
        //     console.log("clicked")
        //     if (x.style.display === "block") {
        //         x.style.display = "none";
        //     } else {
        //         x.style.display = "block";
        //     }
        // }