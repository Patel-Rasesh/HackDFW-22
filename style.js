let listParent = document.getElementById('visitorEntry');
let plus = document.getElementById('visitor-title');
let masterDate = document.getElementById("dateID");
let start = Date.now();

fetch('')
.then(data => {
    return data.json();
    })
    .then(getResult => {
    console.log(getResult);
    });


plus.addEventListener("click", function(e){
    let itemNode = document.createElement('LI');
    
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let date = today.toDateString();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    
    masterDate.style.textAlign = "center";
    masterDate.innerText= date;
    let timeNode = document.createElement('div');
    let timeText = document.createTextNode(hour+":"+minute+":"+seconds);
    timeNode.appendChild(timeText);

    // TODO - Runtime value
    let visitorName = "Demo Nurse A";
    let visitorText = document.createTextNode(visitorName);
    let visitorTextNode = document.createElement('p');
    visitorTextNode.append(visitorText);
    
    itemNode.style.display = "flex";
    timeNode.style.width = "50%";
    visitorTextNode.style.width = "50%";
    visitorTextNode.style.textAlign = "right";

    itemNode.appendChild(timeNode);
    itemNode.appendChild(visitorTextNode);
    itemNode.style.alignItems = 'center';
    itemNode.className = "list-group-item";
    listParent.appendChild(itemNode);

    // let picture = document.getElementById("profilePictureID");
    // picture.src = "images/Test-spoon.jpg";

});