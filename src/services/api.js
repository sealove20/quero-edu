export const getCourses = () =>
  fetch("https://raw.githubusercontent.com/quero-edu/front-end-test-quero/master/db.json")
    .then(res => res.json())
    .then(res => res);