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
const git = simpleGit();

const dates = [
  "2026-04-24",
  "2026-04-25",
  "2026-04-26",
];

const makeCommit = (dateStr) => {
  return new Promise((resolve, reject) => {
    const date = moment(dateStr).format();
    const data = { date };

    jsonfile.writeFile(path, data, (err) => {
      if (err) return reject(err);

      git
        .add([path])
        .commit(`Commit for ${dateStr}`, { "--date": date })
        .then(resolve)
        .catch(reject);
    });
  });
};

const run = async () => {
  for (const dateStr of dates) {
    console.log(`⏳ Committing for ${dateStr}...`);
    await makeCommit(dateStr);
    console.log(`✅ Done: ${dateStr}`);
  }

  // Push all commits at once after the loop
  console.log("🚀 Pushing all commits...");
  await git.push();
  console.log("🎉 All commits pushed successfully!");
};

run().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});