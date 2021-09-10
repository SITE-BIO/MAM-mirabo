import { Sequelize, SequelizeOptions } from 'sequelize-typescript'

export default class PostGres {
  static async connect(config: SequelizeOptions) {
     new Sequelize(config)
     console.log("connected DB")
  }
}