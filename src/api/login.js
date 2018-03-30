import request from '../utils/request'
import ProxyKey from '../core/localProxyKey'

export default {
  async fetchData (params) {
    const { city, id } = params
    const res = await request(`${ProxyKey['api-h5']}/active/v1.0.0/operation/active?activeId=${id}&cityName=${city}`, {
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      }
    })
    return res
  }
}
