document.getElementById("Introduction").addEventListener("click", function () {
    updateContent(
        "bloonstd6.jpg",
        "Bloons Tower Defence",
        "Bloons Tower Defense (BTD) is a popular tower defense game series where players defend against waves of attacking bloons (balloons) by strategically placing various types of towers along a path. Each tower has different abilities, costs, and upgrade paths, and they pop bloons when they are in range. The goal is to prevent the bloons from reaching the end of the track."
    );
});
document.getElementById("Bloons4").addEventListener("click", function () {
    updateContent(
        "bloonstd4.webp",
        "Bloons TD 4 - Oct 26, 2009",
        "Bloons TD 4 introduced 4 new towers, they introduced the glue gunner, monkey ace, monkey buccaneer, and the wizard monkey. They also added an added an additinal upgrade for each tower giving each tower a little more personality. They added different difficultys and challenges to keep you engaged."
    );
});
document.getElementById("Bloons5").addEventListener("click", function () {
    updateContent(
        "bloonstd5.jpg",
        "Bloons TD 5 - Dec 13, 2011",
        "Bloons TD 5 introduced another 6 new towers, they added the sniper monkey, ninja monkey, heli pilot, monkey engineer, bloonchipper, and the monkey sub. They added a second upgrade path to every tower giving them abilitys and more unique. they added special agents to help you out in a pinch. "
    );
});
document.getElementById("Bloons6").addEventListener("click", function () {
    updateContent(
        "bloonstd6game.jpg",
        "Bloons TD 6 - June 14, 2018",
        "Bloons TD 6 has been the biggest release so far adding so much, first they removed the bloonchipper and added the alchemist, the druid, mermonkey, and the beast handler. along side all that that added 16 new Hero monkeys that you can place down once per game. They added tons new bloon types, maps, challenges, quests, bosses and a bunch more. "
    );
});
function updateContent(imageSrc, titleText, descriptionText) {
    const imageElement = document.getElementById("bloons");
    const titleElement = document.getElementById("title");
    const descriptionElement = document.getElementById("description");

    imageElement.src = imageSrc;
    titleElement.textContent = titleText;
    descriptionElement.textContent = descriptionText;
}
