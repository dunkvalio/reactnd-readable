const BASE_URL = 'http://localhost:3001';

const makeCall = (url) => fetch(
  `${BASE_URL}${url}`,
  { headers: { 'Authorization': 'whatever-you-want' } }
);

export function getCategories () {
  return makeCall('/categories')
    .then((res) => res.json())
    .then(result => result.categories);
}

export function getPosts () {
  return makeCall('/posts')
    .then((res) => res.json());
}

export function getPostsByCategory(category) {
  return makeCall(`/${category}/posts`)
    .then(res => res.json());
}
