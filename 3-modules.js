//CommonJS, every file in node is a module (by default)
//Modules - Encapsulated Code (only share minimum)
const {jhon, peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

sayHi('susan')
sayHi(jhon)
sayHi(peter)