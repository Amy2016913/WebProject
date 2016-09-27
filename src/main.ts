function Draw(Input: number): void {

    var maxline, spacenum, starnum: number = 0;
    var starstring, spacestring: string = "";

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

window.onload = () => {
    Draw(5);
};