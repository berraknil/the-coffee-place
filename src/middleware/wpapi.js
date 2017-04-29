const WPAPI = require('wpapi')

const wp = new WPAPI({ endpoint: 'http://developtests.com/wp-json' })

export default function fetchPosts() {
  wp.posts().then(data => console.log(data)).catch(err => console.error(err))
}

wp
  .categories()
  .slug('fiction')
  .then((cats) => {
    // .slug() queries will always return as an array
    const fictionCat = cats[0]
    return wp.posts().categories(fictionCat.id)
  })
  .then((postsInFiction) => {
    // These posts are all categorized "fiction":
    console.log(postsInFiction)
  })

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
