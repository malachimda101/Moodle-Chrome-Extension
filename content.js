var activity = document.getElementsByClassName("activityinstance");

var i;
for(i = 0; i < activity.length - 1; i++){
    var img = activity[i].getElementsByTagName("img")[0].src;
    if(img == "https://wesmoodle.wesleyan.edu/theme/image.php/boost/assign/1616582402/icon"){
        var cln = activity[i].cloneNode(true);
        var myDiv = document.createElement("div");
        myDiv.id = "assignment";
        myDiv.innerHTML = cln.innerHTML;
        document.getElementsByClassName("no-overflow")[0].appendChild(myDiv);
    }
}

// Testing out feature branches in github