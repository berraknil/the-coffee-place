import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_ABOUT_PAGE = 'FETCH_ABOUT_PAGE'
export const FETCH_CONTACT_PAGE = 'FETCH_CONTACT_PAGE'

const URL = 'https://berrak-tests-things.com/wp-json/wp/v2'

export const fetchPosts = () => {
  const request = axios.get(`${URL}/posts`)
  return {
    type: FETCH_POSTS,
    payload: request,
  }
}

export const fetchAboutPage = () => {
  const request = axios.get(`${URL}/pages/2`)
  return {
    type: FETCH_ABOUT_PAGE,
    payload: request,
  }
}

export const fetchContactPage = () => {
  const request = axios.get(`${URL}/pages/111`)
  return {
    type: FETCH_CONTACT_PAGE,
    payload: request,
  }
}
