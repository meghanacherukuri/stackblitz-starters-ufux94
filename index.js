function countOfMultiples() {
  var a = google;
  var b = facebook;
  var c = amazon;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      console.log(a);
    }
    if (i % 5 == 0) {
      console.log(countOfMultiples(b));
    }
    if ((i % 3 == 0) & (i % 5 == 0)) {
      console.log(c);
    }
  }
}
