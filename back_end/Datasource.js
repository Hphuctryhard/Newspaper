// src/data-source.js
require("reflect-metadata");
// CommonJS equivalents
const { DataSource } = require("typeorm");

const Account = require("./entities/Account.js");
const Donor = require("./entities/Donor.js");
const Hospital = require("./entities/Hospital.js");
const Organization = require("./entities/Organization.js");
const BloodBank = require("./entities/BloodBank.js");
const Staff = require("./entities/Staff.js");
const BloodUnit = require("./entities/BloodUnit.js");
const Request = require("./entities/Request.js");
const Event = require("./entities/Event.js");
const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "127.0.0.1",
  port: +(process.env.DB_PORT || 3306),
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "donor_system",
  // ĐƯA TRỰC TIẾP object schema vào đây
  entities: [Account, Donor, Hospital, Organization, BloodBank,Staff,BloodUnit,Request,Event],
  synchronize: false, // dev
  logging: false,
});

// Debug: xem TypeORM thấy gì trước khi init
console.log(
  "Entities config types:",
  AppDataSource.options.entities.map((e) => typeof e)
);

module.exports = { AppDataSource };
