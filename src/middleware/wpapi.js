const WPAPI = require('wpapi')

const wp = new WPAPI({ endpoint: 'http://developtests.com/wp-json' })


export default function fetchPosts() {
  wp.posts().then(data => console.log(data)).catch(err => console.error(err))
}

/*
wp
      .pages()
      .then(page =>
        page.map((p) => {
          if (p.id === 156) {
            console.log(p.title.rendered)
          } else {
            console.log(p.id)
          }
        }),
      )
      .catch(err => console.error(err))*/