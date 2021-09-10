require('dotenv').config()
import { SequelizeOptions } from "sequelize-typescript";
import { PlcData } from "../models/plc_data";
import { PlcSpec } from "../models/plc_specs";

export const socketPort = parseInt(process.env.SOCKET_PORT, 10) || 9999;

export const serverPort = parseInt(process.env.SERVER_PORT, 10) || 8888;

export const postGresConfig: SequelizeOptions = {
    host: process.env.DB_HOST || '103.141.144.198',
    database: process.env.DB_DATABASE || 'appsim_order',
    dialect: 'postgres',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'Appsim2020',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    models: [PlcData, PlcSpec],
}

