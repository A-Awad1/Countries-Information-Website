export default function fetchCountries() {
  return (
    fetch("/json/db.json")
      .then((resolved) => resolved.json())
      .then((resolve) => resolve.data)
      // start modifying some data
      .then((resolve) => {
        let x = resolve.filter((e) => e.alpha3Code === "PSE")[0];
        x.name = x.name.split(",", 1)[0];
        x.currencies = x.currencies.filter((e) => e.code !== "ILS");
        let y = resolve.filter((e) => e.area === 20770)[0];
        x.borders = y.borders;
        resolve.splice(resolve.indexOf(y), 1);
        resolve
          .filter((e) => e.borders && e.borders.includes("ISR"))
          .map((e) => (e.borders[e.borders.indexOf("ISR")] = "PSE"));
        return resolve;
      })
  );
  // end modifying the data
}
