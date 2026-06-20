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
  "2026-05-14",
  "2026-05-15",
  "2026-05-16",
  "2026-05-17",
  "2026-05-18",
  "2026-05-19",
  "2026-05-20",
  "2026-05-21",
  "2026-05-22",
  "2026-05-23",
  "2026-05-24",
  "2026-05-25",
  "2026-05-26",
  "2026-05-27",
  "2026-05-27",
  "2026-05-27",
  "2026-05-27",
  "2026-05-27",
  "2026-05-27",
  "2026-05-27",
  "2026-05-28",
  "2026-05-29",
  "2026-05-30",
  "2026-05-31",
  "2026-06-01",
  "2026-06-02",
  "2026-06-03",
  "2026-06-04",
  "2026-06-05",
  "2026-06-06",
  "2026-06-07",
  "2026-06-08",
  "2026-06-09",
  "2026-06-10",
  "2026-06-11",
  "2026-06-12",
  "2026-06-13",
  "2026-06-14",
  "2026-06-15",
  "2026-06-16",
  "2026-06-17",
  "2026-06-18",
  "2026-06-19",
  "2026-06-20",
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