import axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.SERVER_BUILD) {
}

options.baseURL = '/'
options.params = { isAjax: 1 }
// options.headers = { 'x-ajax-data': 1 }

export default axios.create(options)
