import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";

// Target date
const date = moment("2025-07-27").format(); // or use toISOString()
// YYYY-MM-DD
const data = { date };

jsonfile.writeFile(path, data, () => {
    simpleGit()
        .add([path])
        .commit("Commit for 15 July 2024", { '--date': date })
        .push();
});