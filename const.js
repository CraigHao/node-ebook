const env = require('./env')

let resUrl
let dbHost
let dbUser
let dbPwd
if (env === 'dev') {
  resUrl = 'http://192.168.0.107:8081'
  dbHost = 'localhost'
  dbUser = 'root'
  dbPwd = '1'
} else if (env === 'prod') {
  resUrl = 'http://112.124.22.236'
  dbHost = '112.124.22.236'
  dbUser = 'root'
  dbPwd = '1'
}

const category = [
  'Biomedicine',
  'BusinessandManagement',
  'ComputerScience',
  'EarthSciences',
  'Economics',
  'Engineering',
  'Education',
  'Environment',
  'Geography',
  'History',
  'Laws',
  'LifeSciences',
  'Literature',
  'SocialSciences',
  'MaterialsScience',
  'Mathematics',
  'MedicineAndPublicHealth',
  'Philosophy',
  'Physics',
  'PoliticalScienceAndInternationalRelations',
  'Psychology',
  'Statistics'
]

module.exports = {
  resUrl,
  category,
  dbHost,
  dbUser,
  dbPwd
}
