let difficulty = ["Relaxed", "Challenging", "Hard", "Peaceful", "Hostile"];
let genres = ["Action", "Sport", "Adventure", "RPG", "Racing", "Fighting", "RTS", "Simulation", "FPS"];
let setting = ["Modern", "Medieval", "Futristic", "Jungle", "Under Water", "Space", "Steam Punk", "Distopian", "Renaissance", "Scary"];
let mainMechanic = ["Jumping", "Throwing", "Shooting", "Teleporting", "Time Travel", "Stealth", "Flying", "Driving", "Hacking"];
let character = ["Human", "Alien", "Insect", "Canine", "Feline", "Arachnid", "Object", "God-like"];
let graphics = ["Pixel Art", "2D", "3D", "High Fidelity", "Voxel Based"];
let sellingFeature = ["Sound Effects", "Artstyle", "Smooth Gameplay", "Amazing Soundtrack", "Length", "Story"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}  

function Generate()
{
    document.getElementById("ideaParagraph").innerText =
     "A " + difficulty[getRandomInt(difficulty.length)] +
     " " + genres[getRandomInt(genres.length)] +
     " game in a " + setting[getRandomInt(setting.length)] +
     " setting. The main mechanic should be " + mainMechanic[getRandomInt(mainMechanic.length)] +
     " and the player should be a " + character[getRandomInt(character.length)] +
     ". The graphics should be " + graphics[getRandomInt(graphics.length)] +
     ". It should be know for it's " + sellingFeature[getRandomInt(sellingFeature.length)] + ".";
}