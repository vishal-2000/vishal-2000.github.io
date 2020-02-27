// counter starts here



// counter ends here



//Responsive navbar element from here
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
  if(navbarMenu.classList.contains("open")) {
    navbarToggler.click();
  }
}




//Scroll to top element from here
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* coding images on click */




function changeImage() {
    var imgArray=new Array();
imgArray[0]= new Image();
imgArray[0].src = "../images/pic1.jpeg";

imgArray[1]= new Image();
imgArray[1].src = "../images/pic2.jpg";

imgArray[2]= new Image();
imgArray[2].src = "../images/pic3.jpg";

imgArray[3]= new Image();
imgArray[3].src = "../images/pic4.jpg";

imgArray[4]= new Image();
imgArray[4].src = "../images/pic5.jpg";
    var element=document.getElementById("imgClickAndChange").src;
    //document.write(element);
    //document.write(imgArray[0]);
    for(var i=0;i<=4;i++)
    {
        if(element===imgArray[i].src)
        {
            document.getElementById("imgClickAndChange").src=imgArray[(i+1)%5].src;
        }
    }
    
}

// page counter
/*var n = localStorage.getItem('on_load_counter');
 
if (n === null) {
    n = 0;
}
 
n++;
 
localStorage.setItem("on_load_counter", n);
 
document.getElementById('counter').innerHTML = n;*/



    //document.write("You've had "+ localStorage.pagecount + " hits.");



// page counter ends

// Feedback mechanism starts here



/*function on_submit()
{
    
    var dict={};
    dict["name"]=document.getElementById("name").value;
    dict["skill"]=document.getElementById("skill").value;
    dict["level"]=document.getElementById("level").value;
    dict["Description"]=document.getElementById("Description").value;
    /*for(var key in dict )
    {
        dict[key]=document.getElementById(key).value;
    }*/
    
   /* var x=document.createElement("TR");
    for(var key in dict)
    {
        //console.log(dict[key]);
        var y=document.createElement("TD");
        var z=document.createTextNode(dict[key]);
        y.appendChild(z);
        x.appendChild(y);
        document.getElementById(key).value="";
        
    }
    document.getElementById("my_table").appendChild(x); 
    localStorage.setItem("my_table");
}*/


function funfun()
{
    var namez = document.getElementById("name").value
    var skillz = document.getElementById("skill").value
    var levelz = document.getElementById("level").value
    var commentz = document.getElementById("Description").value

    if('namesarr' in localStorage)
    {
        var namesarr = JSON.parse(localStorage.getItem('namesarr'))
    }
    if('skillsarr' in localStorage)
    {
        var skillsarr = JSON.parse(localStorage.getItem('skillsarr'))
    }
    if('levelsarr' in localStorage)
    {
        var levelsarr = JSON.parse(localStorage.getItem('levelsarr'))
    }
    if('commentsarr' in localStorage)
    {
        var commentsarr = JSON.parse(localStorage.getItem('commentsarr'))   
    }

    if(namesarr != null)
    {
        namesarr.push(namez)
        skillsarr.push(skillz)
        levelsarr.push(levelz)
        commentsarr.push(commentz)
    }
    else
    {
        var namesarr = [namez]
        var skillsarr = [skillz]
        var levelsarr = [levelz]
        var commentsarr = [commentz] 
    }
    

    localStorage.setItem("namesarr", JSON.stringify(namesarr))
    localStorage.setItem("skillsarr", JSON.stringify(skillsarr))
    localStorage.setItem("levelsarr", JSON.stringify(levelsarr))
    localStorage.setItem("commentsarr", JSON.stringify(commentsarr))

    
    var tablevar = document.getElementById("my_table")
    var nr = tablevar.insertRow();
    var c1 = nr.insertCell(0)
    var c2 = nr.insertCell(1)
    var c3 = nr.insertCell(2)
    var c4 = nr.insertCell(3)
    c1.innerHTML = namesarr[commentsarr.length-1]
    c2.innerHTML = skillsarr[commentsarr.length-1]
    c3.innerHTML = levelsarr[commentsarr.length-1]
    c4.innerHTML = commentsarr[commentsarr.length-1]
    

    document.getElementById("fform").reset();
}

function loadTable()
{
    if('namesarr' in localStorage)
    {
        var namesarr = JSON.parse(localStorage.getItem('namesarr'))
    }
    if('skillsarr' in localStorage)
    {
        var skillsarr = JSON.parse(localStorage.getItem('skillsarr'))
    }
    if('levelsarr' in localStorage)
    {
        var levelsarr = JSON.parse(localStorage.getItem('levelsarr'))
    }
    if('commentsarr' in localStorage)
    {
        var commentsarr = JSON.parse(localStorage.getItem('commentsarr'))   
    }

    if(namesarr != null)
    {
        
        var tablevar = document.getElementById("my_table")
        for (let i = 0; i < skillsarr.length; i++)
        {
            var nr = tablevar.insertRow();

            var c1 = nr.insertCell(0)
            var c2 = nr.insertCell(1)
            var c3 = nr.insertCell(2)
            var c4 = nr.insertCell(3)
            c1.innerHTML = namesarr[i]
            c2.innerHTML = skillsarr[i]
            c3.innerHTML = levelsarr[i]
            c4.innerHTML = commentsarr[i]
        }
    }
}          

//document.write(n);
