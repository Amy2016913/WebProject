function Draw(Input) {
    var maxline, spacenum, starnum = 0;
    var starstring, spacestring = "";
    for (maxline = 0; maxline < Input; maxline++) {
        starstring = "";
        spacestring = "";
        for (spacenum = 0; spacenum < (Input - maxline - 1); spacenum++) {
            spacestring += " ";
        }
        for (starnum = 0; starnum < (2 * maxline + 1); starnum++) {
            starstring += "*";
        }
        console.log(spacestring + starstring);
    }
}
window.onload = function () {
    Draw(5);
};
//# sourceMappingURL=main.js.map