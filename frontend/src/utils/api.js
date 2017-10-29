const BASE_URL = 'http://localhost:3001';

const makeCall = (url) => fetch(
  `${BASE_URL}${url}`,
  { headers: { 'Authorization': 'whatever-you-want' } }
);

export function fetchCategories () {
  return makeCall('/categories')
    .then((res) => res.json())
    .then(result => result.categories);
}
