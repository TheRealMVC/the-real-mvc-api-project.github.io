function createNode(element)// this is creating the element
{
    return document.createElement(element);
}

function append(parent, el)
{
    return parent.appendChild(el);
}

const ul = document.getElementById("catFish");// grabs this from the html

const url = 'https://randomuser.me/api/?results=20';// keeps the results at 20

fetch(url)
.then((resp) => resp.json())// formats the response in JSON data
.then(function(data){  //returns the promise and executes the function
    let catFish = data.results;

    return catFish.map(function(catFished) {


    let li = createNode('li')// creates list item
    let img = createNode('img')// creates image field
    let span = createNode('span');//ends calling out the elements with the span tag

    img.src=catFished.picture.medium;

    span.innerHTMl= `${catFished.name.first}
    ${catFished.name.last}`  //first name last name function

    append(li,img);// 
    append(li,span);
    append(ul,li);
})
})

.catch(function(error){

    console.log(json.stringify(error));
})