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

const getVote = vote => {
  let option;
  if (vote === 1) {
    option = 'upVote';
  } else if (vote === -1) {
    option = 'downVote';
  }
  return option;
};

export function getCategories () {
  return api.get('/categories')
    .then(res => res.data)
    .then(result => result.categories);
}

export function getPosts () {
  return api.get('/posts')
    .then(res => res.data);
}

export function getPostsByCategory(category) {
  return api.get(`/${category}/posts`)
    .then(res => res.data);
}

export function getPostById (id) {
  return api.get(`/posts/${id}`).then(res => res.data);
}

export function getCommentsForPost(id) {
  return api.get(`/posts/${id}/comments`)
    .then(res => res.data);
}

export function postPost(author, title, body, category) {
  return api.post('/posts', {
    id: guid(),
    timestamp: getTimestamp(),
    title,
    author,
    body,
    category,
  }).then(res => res.data);
}

export function postPostVote(id, vote) {
  const option = getVote(vote);
  return api.post(`/posts/${id}`, { option }).then(res => res.data);
}

export function putPost(id, title, body) {
  return api.put(`/posts/${id}`, { title, body }).then(res => res.data);
}

export function deletePost(id) {
  return api.delete(`/posts/${id}`);
}

export function postComment(parentId, author, body) {
  return api.post('/comments', {
    id: guid(),
    timestamp: getTimestamp(),
    body,
    author,
    parentId,
  }).then(res => res.data);
}

export function postCommentVote(commentId, vote) {
  const option = getVote(vote);
  return api.post(`/comments/${commentId}`, { option }).then(res => res.data);
}

export function putComment(commentId, timestamp, body) {
  return api.put(`/comments/${commentId}`, { timestamp, body })
    .then(res => res.data);
}

export function deleteComment(commentId) {
  return api.delete(`/comments/${commentId}`)
    .then(res => res.data);
}
