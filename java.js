document.getElementById("Introduction").addEventListener("click", function () {
    updateContent(
        "BTD6main.png",
        "Bloons Tower Defence",
        "Bloons Tower Defense (BTD) is a highly popular tower defense game series where players fend off waves of attacking bloons (balloons) by strategically positioning various types of towers along a path. Each tower offers unique abilities, costs, and upgrade paths, designed to pop bloons within their range. The ultimate objective is to stop the bloons from reaching the end of the track."
    );
});
document.getElementById("Bloons4").addEventListener("click", function () {
    updateContent(
        "TD4.png",
        "Bloons TD 4 - Oct 26, 2009",
        "Bloons TD 4 introduced four new towers: the Glue Gunner, Monkey Ace, Monkey Buccaneer, and Wizard Monkey. Additionally, an extra upgrade was added for each tower, giving them more personality and depth. The game also introduced different difficulty levels and challenges to keep players engaged, making it a significant step forward in the series' evolution."
    );
});
document.getElementById("Bloons5").addEventListener("click", function () {
    updateContent(
        "TD5.png",
        "Bloons TD 5 - Dec 13, 2011",
        "Bloons TD 5 introduced six new towers: the Sniper Monkey, Ninja Monkey, Heli Pilot, Monkey Engineer, Bloonchipper, and Monkey Sub. It also added a second upgrade path for every tower, unlocking unique abilities and making each one more distinctive. On top of that, special agents were introduced, providing powerful support in critical moments and adding a fresh strategic edge to the gameplay. They added the Monkey Lab, where players could unlock permanent upgrades to enhance their towers and overall performance. Lastly co-op was in Mar 26, 2013, allowing players to team up with friends."
    );
});
document.getElementById("Bloons6").addEventListener("click", function () {
    updateContent(
        "TD6.png",
        "Bloons TD 6 - June 14, 2018",
        "Bloons TD 6 is the biggest and most ambitious release in the series, packed with exciting additions. It removed the Bloonchipper and added four new towers: the Alchemist, and the Druid, the Mermonkey and the Beast Handler were not added till later updates, each offering unique abilities. It also introduced 16 new Hero Monkeys, powerful units placed once per game, each with distinct abilities and upgrades. The game added tons of new content, including more Bloon types, creative maps, challenges, quests, bosses, and more. Monkey Knowledge brought a skill tree system for permanent upgrades, and daily rewards offered incentives to keep progressing. With all these features, Bloons TD 6 sets a new standard for strategy and replayability in the series."
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
