const all = {
  'api-h5': '/api-h5'
}

if (location.origin.indexOf('localhost') === -1) {
  for (let key in all) {
    all[key] = ''
  }
}

export default all
