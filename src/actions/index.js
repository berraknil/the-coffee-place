import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_PAGE = 'FETCH_PAGE'

const URL = 'http://developtests.com/wp-json/wp/v2'

export function fetchPosts() {
  const request = axios.get(`${URL}/posts`)
  return {
    type: FETCH_POSTS,
    payload: request,
  }
}

export function fetchPage(id) {
  const request = axios.get(`${URL}/pages/${id}`)
  return {
    type: FETCH_PAGE,
    payload: request,
  }
}
