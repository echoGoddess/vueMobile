import 'whatwg-fetch'

function parseJSON (response) {
  return response.json()
}

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

async function request (url, options = {}) {
  try {
    options.credentials = 'include'
    const res = await fetch(url, options)
    let result = await checkStatus(res)
    result = await parseJSON(result)
    return result
  } catch (e) {
    const error = new Error(e.statusText)
    throw error
  }
}

export default request
