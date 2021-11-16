let soccer = new SoccerPlayer( 
"Christian Pulisic",
"23",
"midfielder",
"Chelsea");
console.log(soccer);


const name = ["Romelu Lukaku","Mason Mount", "Edouard Mendya", "Kai Havertz","Christian Pulisic"];
const age = ["28","22", "29", "22", "23"];
const position = ["foward","midfielder","goalkeeper","midfielder","midfielder"];
const club = ["Chelsea","Chelsea","Chelsea","Chelsea","Chelsea"];
const newPlayer = new Array();
for (let index = 0; index <=4; index++){
    soccer = new SoccerPlayer(name[index],
    age[index],
    position[index],
    club[index])
newPlayer.push(soccer);
}
console.log(soccer)
const playerList = document.createElement("p");
newPlayer.forEach(soccer => {
    let str =
        `Player Name: ${soccer.name} -- Age: ${soccer.age} -- Position: ${soccer.position} -- Club: ${soccer.club}`;
    // Create a list item
    let playerListItem = document.createElement("p");
    playerListItem.textContent = str;
    playerList.append(playerListItem);
}
);
playerDiv = document.querySelector(".newPlayerBox")
playerDiv.append(playerList);
console.log(newPlayer)