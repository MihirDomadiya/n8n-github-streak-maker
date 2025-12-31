// import jsonfile from "jsonfile"; 
// import moment from "moment";
// const path = "./data.json";
// import simpleGit from "simple-git";
// // const date = moment().format();
// // const date = moment().subtract(1,"y").add(1,"d").add(x,"w").add(y,"d").format();
// const date = moment().subtract(1,"y").add(1,"d").add(1,"w").add(1,"d").format();
// const data = {
// date: date,
// };:qa
// jsonfile.writeFile(path, data, ()=>{
//     simpleGit().add([path]).commit(date,{'--date':date}).push();
// });

import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";

// Target date
const date = moment("2025-12-25").format();
// YYYY-MM-DD
const data = { date };

jsonfile.writeFile(path, data, () => {
    simpleGit()
        .add([path])
        .commit("Commit for 14 November 2024", { '--date': date })
        .push();
});