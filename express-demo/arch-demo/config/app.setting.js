//环境配置
var pkg = require('../package.json')
var h5_env = process.env.H5_ENV || pkg.config && pkg.config.env || 'prod' // h5 环境变量

var fatConfigs = {
    'Env': 'FAT',
    'restfullApi': ''
}

var uatConfigs = {
    'Env': 'UAT',
    'restfullApi': ''
}

var prdConfigs = {
    'Env': 'PROD',
    'restfullApi': ''
}

var collection = {
    fat: fatConfigs,
    uat: uatConfigs,
    prod: prdConfigs
}

module.exports = collection[h5_env.toLowerCase() || 'prod']
