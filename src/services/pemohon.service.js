/* eslint-disable no-useless-catch */
import axiosService from './axios.service'

export class PemohonService {
  static get entity() {
    return 'pemohon'
  }

  static async getAll() {
    try {
      const response = await axiosService.get(this.entity)

      return response.data.data
    } catch (err) {
      throw err
    }
  }

  static async updateDataByKey(key, data) {
    try {
      const response = await axiosService.put(`${this.entity}/${key}`, data)

      return response
    } catch (err) {
      throw err
    }
  }
}
