import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_PAGE = 'FETCH_PAGE'

const URL = 'http://developtests.com/wp-json/wp/v2'

export function fetchPosts() {
  const posts = axios.get(`${URL}/posts`)
  return {
    type: FETCH_POSTS,
    posts,
  }
}

export function fetchPage(id) {
  const page = axios.get(`${URL}/pages/${id}`)
  return {
    type: FETCH_PAGE,
    page,
  }
}
