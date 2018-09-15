import config from './../../utils/config.json'

export function fetchNewsSourceAPI() {
  return (dispatch) => {
    dispatch(getNewsSource())

    fetch('https://' + config.baseURL + '/sources?' + config.apiKey, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => dispatch(newsSourceFulfilled(data.sources)))
      .catch(err => dispatch(newsSourceRejected(err)))
  }
}

function getNewsSource() {
  return {
    type: 'NEWS_SOURCE_PENDING'
  }
}

function newsSourceFulfilled(data) {
  return {
    type: 'NEWS_SOURCE_FULFILLED',
    data
  }
}

function newsSourceRejected(err) {
  return {
    type: 'NEWS_SOURCE_REJECTED',
    err
  }
}
