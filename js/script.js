const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

cat.complain();

// question 2

const div = document.getElementById("updateheading");

div.innerHTML = "Updated Heading!";

// question 3

div.style.fontSize = "2em";

// question 4

document.getElementById("updateheading").setAttribute("class", "subheading");

// question 5

var paragraph= document.getElementsByTagName('p');
for (var i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = "red";
}

// question 6

const resultContainer = document.getElementsByClassName("results");

resultContainer[0].innerHTML = "<p>New paragraph</p>";

resultContainer[0].style.backgroundColor = "yellow";

// question 7

function loopCats(list){
    for (var cat of list) {
        console.log(cat.name);
    }
}
loopCats(cats);

// question 8

const catContainer = document.getElementsByClassName("cat-container")[0];

function createCats(list){
    for (var cat of list) {
        var age;

        if (!("age" in cat)==0){
           age = cat.age;
        } else {
            age = "Age unknown!";
        }

        var html = "";
        html += "<div>";
        html += "<h5>"+cat.name+"</h5>";
        html += "<p>"+age+"</p>";
        html += "</div>";
        catContainer.innerHTML += html;
        
    }
}
createCats(cats);