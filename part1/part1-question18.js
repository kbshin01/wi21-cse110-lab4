for (let x in statistics) {
  if (x.startsWith("r") || (statistics[x] % 2 !== 0)) {
    console.log(statistics[x]);
  }
}
