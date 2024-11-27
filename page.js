/** @format */
let games;
let panel_class;

const setUp = () => {
    console.log("in setup");
    $("#mmo").on("click", createPanel);
    $("#moba").on("click", createPanel);
    $("#fps").on("click", createPanel);
};

const createPanel = (event) => {
    console.log("createPanel -- event --", event);
    panel_class = event.target.id;
    console.log("panel_class: ", panel_class);

    $(".games").html(`<div class=${panel_class}></div>`);
    let area = $(`.games .${panel_class}`);
    console.log("AREA:", area);

    games = panel_class === "mmo" ? getAllMmosAPI() :
            panel_class === "moba" ? getAllMobasAPI() : getAllFpsAPI();
    console.log(games);

games.forEach((game) => {
let gameLine = $(
    `<div class="borderLine">
    <div class = "info">${game.game_name} made by ${game.game_publisher} <img src="${game.game_name}.png" alt="$game.game_name}" /></div>
    <div class="crud_buttons">
    <button class="view">View</button>
    <button class="update">Update</button>
    <button class="remove">Remove</button>
    </div>
    <div class="showInfo"></div>
    </div>`
         
);
area.append(gameLine);
});

let createEntry = 
$(`<span>Use the Create button to add a new ${panel_class} to the library.</span>
    <div class="crud_buttons"><button class="create">Create</button></div>`);
$(`.games`).prepend(createEntry);
$(".crud_buttons .create").on("click", createHandler);


$(".borderLine button").on("click", (e) => {
const target = $(e.target);
console.log(target[0]);
handler(target[0]);

});
};

const handler = (element) => {
    let elementClass = element.className;
    let indexOfGame = $(`button.${elementClass}`).index(element);
    if (indexOfGame >= 0)
        if (elementClass == "view") {
            viewHandler(indexOfGame);
        } else if (elementClass == "update") {
            updateHandler(indexOfGame); 
        } else if (elementClass == "remove") {
            removeHandler(indexOfGame);
        }
};

const viewHandler = (index) => {
    let info = $(".showInfo:eq(" + index + ")");
    info.html(
        `${games[index].game_name} was released on ${games[index].release_date}. The game is intended for audiences the ages of ${games[index].game_rating} Is the game competitive?: ${games[index].esports_review}. Is the game free to play?: ${games[index].free_to_play} <button class="close">X</button>`
    );
    info.find(".close").on("click", () => {
   setTimeout(() => {
    info.html("");
   }, 500);
});
};
//change
const updateHandler = (index) => {
let borderLine = $(`.${panel_class} .borderLine`).eq(index);
let updatePara = $(`
<div class="updateForm">
<input type="text" id="update_game_name" value="${games[index].game_name}" size="21"/>
publisher: <input type="text" id="update_publisher" value="${games[index].game_publisher}" size="21"/>
release date: <input type="text" id="update_release_date" value="${games[index].release_date}" size="15"/>
rating: <input type="text" id="update_rating" value="${games[index].game_review}" size="9"/>
esports review: <input type="text" id="update_free_to_play" value="${games[index].free_to_play}" size="8"/>
<button class="save_update">Save</button>
</div>
`);
borderLine.html(updatePara);

$(".save_update").on("click", function () {
    games[index] = {
        game_name: $("#update_game_name").val(),
        game_publisher: $("#update_publisher").val(),
        release_date: $("#update_release_date").val(),
        game_review: $("#update_rating").val(),
        esports_review: $("#update_esports_review").val(),
        free_to_play: $("#update_free_to_play").val(),
    };

    //change
    borderLine.html(`
         <div class = "info">${games[index].game_name} made by ${games[index].game_publisher} <img src="${games[index].game_name}.png" alt="$games[index].game_name}" /></div>
        <div class=crud_buttons">
        <button class="view">View</button>
        <button class="update">Update</button>
        <button class="remove">Remove</button>
        </div>
        <div class="showInfo"></div>
        `);
$(".borderLine button").on("click", (e) => {
    const target = $(e.target);
    console.log(target);
    console.log(target[0]);
    handler(target[0]);

});
});
};

const removeHandler = (index) => {
    let item = $(`.${panel_class} .borderLine`).eq(index);
    item.remove();
    games.splice(index, 1);
    console.log(games);
};

const createHandler = () => {
    $("button.create").prop("disabled", true);
   let createPara = $(`
  <input type="text" id="new_game_name" value="Game Name" size="21"/>
  Publisher: <input type="text" id="new_publisher" value="Publisher" size="21"/>
  Release Date: <input type="text" id="new_release_date" value="Release Date" size="12"/>
  Rating: <input type="text" id="new_rating" value="Rating" size="9"/>
  Esports Review: <input type="text" id="new_free_to_play" value="Yes/No" size="13"/>
  <button class ="save_new">Save</button>
    
`);
$(".crud_buttons .create").after(createPara);

$(".save_new").on("click", function () {
let newGame = {
    game_name: $("input#new_game_name").val(),
    game_publisher: $("input#new_publisher").val(),
    release_date: $("input#new_release_date").val(),
    game_review: $("input#new_rating").val(),
    esports_review: $("input#new_esports_review").val(),
    free_to_play: $("input#new_free_to_play").val(),

};
games.push(newGame);

let area = $(`.games .${panel_class}`);
let gameLine = $(
    `<div class="borderLine">
     <div class = "info">${game.game_name} made by ${game.game_publisher} <img src="${game.game_name}.png" alt="$game.game_name}" /></div>
     <div class="crud_buttons">
     <button class="view">View</button>
     <button class="update">Update</button>
     <button class="remove">Remove</button>
     </div>
     <div class="showInfo"></div>
     </div>`
);
area.append(gameLine);
$(".borderLine button").on("click", (e) => {
    const target = $(e.target);
    handler(target[0]);
});
$("button.create").prop("disabled", false);
createPara.remove();
});

};
$(document).ready(setUp);

////////change