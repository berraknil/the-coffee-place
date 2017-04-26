const WPAPI = require('wpapi')

const wp = new WPAPI({ endpoint: 'http://developtests.com/wp-json' })


export default function fetchPosts() {
  wp.posts().then(data => console.log(data)).catch(err => console.error(err))
}
