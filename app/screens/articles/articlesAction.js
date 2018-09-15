import config from './../../utils/config.json'

export function fetchArticlesAPI(source, key_search) {
  return (dispatch) => {
    dispatch(getArticles())

    fetch('https://' + config.baseURL + '/everything?sources=' + source + '&q=' + key_search + '&' + config.apiKey, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => dispatch(articlesFulfilled(data.articles)))
      .catch(err => dispatch(articlesRejected(err)))
  }
}

function getArticles() {
  return {
    type: 'ARTICLES_PENDING'
  }
}

function articlesFulfilled(data) {
  return {
    type: 'ARTICLES_FULFILLED',
    data
  }
}

function articlesRejected(err) {
  return {
    type: 'ARTICLES_REJECTED',
    err
  }
}