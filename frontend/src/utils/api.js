import axios from 'axios';

function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
  headers: { 'Authorization': 'whatever-you-want' }
});

const getTimestamp = () => Date.now();

export function getCategories () {
  return api.get('/categories')
    .then(res => res.json())
    .then(result => result.categories);
}

export function getPosts () {
  return api.get('/posts')
    .then(res => res.json());
}

export function getPostsByCategory(category) {
  return api.get(`/${category}/posts`)
    .then(res => res.json());
}


export function getPostById (id) {
  return api.get(`/posts/${id}`).then(res => res.json());
}

export function getCommentsForPost(id) {
  return api.get(`/posts/${id}/comments`)
    .then(res => res.json());
}

export function postPost(title, author, body, category) {
  return api.post('/posts', {
    id: guid(),
    timestamp: getTimestamp(),
    body,
    author,
    category,
  }).then(res => res.json());
}

export function postPostVote(id, vote) {
  return api.post(
      `/posts/${id}`,
      { option: (vote > 0) ? 'upVote' : 'downVote' }
    ).then(res => res.json());
}

export function putPost(id, title, body) {
  return api.put(`/posts/${id}`, { title, body }).then(res => res.json());
}

export function deletePost(id, title, body) {
  return api.delete(`/posts/${id}`);
}

export function postComment(parentId, author, body) {
  return api.post('/comments', {
    id: guid(),
    timestamp: getTimestamp(),
    body,
    author,
    parentId,
  }).then(res => res.json());
}

export function postCommentVote(id, upvote) {
  return api.post(
    `/comments/${id}`,
    { option: upvote ? 'upVote' : 'downVote' }
  ).then(res => res.json());
}
