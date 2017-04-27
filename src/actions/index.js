import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'

const URL = 'http://developtests.com/wp-json/wp/v2'

export function fetchPosts() {
  const posts = axios.get(`${URL}/posts`)

  return {
    type: FETCH_POSTS,
    posts,
  }
}
