import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";
const git = simpleGit();

const startDate = moment("2026-05-14");
const endDate = moment("2026-06-20");

// Random integer between min and max (inclusive)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

async function generateCommits() {
  let currentDate = startDate.clone();

  while (currentDate.isSameOrBefore(endDate, "day")) {
    // Random number of commits for this day (1-10)
    const commitsToday = randomInt(1, 10);

    console.log(
      `${currentDate.format("YYYY-MM-DD")} → ${commitsToday} commits`
    );

    for (let i = 0; i < commitsToday; i++) {
      // Random time during the day
      const commitDate = currentDate
        .clone()
        .hour(randomInt(8, 23))
        .minute(randomInt(0, 59))
        .second(randomInt(0, 59));

      const data = {
        date: commitDate.format(),
        commitNumber: i + 1,
      };

      await jsonfile.writeFile(path, data);

      await git.add([path]).commit(
        `Commit ${i + 1} on ${currentDate.format("YYYY-MM-DD")}`,
        {
          "--date": commitDate.format(),
        }
      );
    }

    currentDate.add(1, "day");
  }

  await git.push();

  console.log("✅ All commits generated and pushed");
}

generateCommits().catch(console.error);

// import jsonfile from "jsonfile";
// import moment from "moment";
// import simpleGit from "simple-git";

// const path = "./data.json";
// const git = simpleGit();

// const startDate = moment("2026-01-24");
// const endDate = moment("2026-03-15");

// // Random integer between min and max (inclusive)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// async function generateCommits() {
//   let currentDate = startDate.clone();

//   while (currentDate.isSameOrBefore(endDate, "day")) {
//     // Random number of commits for this day (1-10)
//     const commitsToday = randomInt(1, 10);

//     console.log(
//       `${currentDate.format("YYYY-MM-DD")} → ${commitsToday} commits`
//     );

//     for (let i = 0; i < commitsToday; i++) {
//       // Random time during the day
//       const commitDate = currentDate
//         .clone()
//         .hour(randomInt(8, 23))
//         .minute(randomInt(0, 59))
//         .second(randomInt(0, 59));

//       const data = {
//         date: commitDate.format(),
//         commitNumber: i + 1,
//       };

//       await jsonfile.writeFile(path, data);

//       await git.add([path]).commit(
//         `Commit ${i + 1} on ${currentDate.format("YYYY-MM-DD")}`,
//         {
//           "--date": commitDate.format(),
//         }
//       );
//     }

//     currentDate.add(1, "day");
//   }

//   await git.push();

//   console.log("✅ All commits generated and pushed");
// }

// generateCommits().catch(console.error);