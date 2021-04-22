/* eslint-disable no-useless-catch */
import axiosService from './axios.service'

export class AnggaranService {
  static get entity() {
    return 'lembaga'
  }

  static async getDataLembaga() {
    try {
      const response = await axiosService.get(this.entity)

      return response.data.data
    } catch (err) {
      throw err
    }
  }

  static async getDataBiayaRiilByLembaga(key) {
    try {
      const response = await axiosService.get(
        `${this.entity}/biaya-riil/${key}`
      )

      return response.data.data
    } catch (err) {
      throw err
    }
  }
}
