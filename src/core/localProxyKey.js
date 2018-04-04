const all = {
  'api-h5': '/api-h5'
}

if (process.env.NODE_ENV !== 'development') {
  for (let key in all) {
    all[key] = ''
  }
}

export default all
