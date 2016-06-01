var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.01/test')

var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {
  
  var vehicleSchema = mongoose.Schema({
        "id": Number,
        "brand": String,
        "model": String,
        "trailer_type": String,   
        "license_plate": String,
        "color": String,
        "year": Number,
        "chassis_serial": String,
        "engine_serial": String,
        "mileage": Number
  }) 
    
  vehicleSchema.methods.trip = function () {
    var trip1 = this.id ? `Trip in car number ${this.id}`
                        : "No trip"
    console.log(trip1)
  }
  
  var Vehicle = mongoose.model('Vehicle', vehicleSchema)
  
  var v = new Vehicle({
		"id": 1,
		"brand": "Hyundai",
		"model": "940",
		"trailer_type": "Normal",
		"license_plate": "M1Y1V3",
		"color": "Azul",
		"year": 2010,
		"chassis_serial": "HSE80NQV8TE",
		"engine_serial": "WNU30JSI6PU",
		"mileage": 10902
	})
  
  console.log(v.color)
  
  var car = new Vehicle({
		"id": 2,
		"brand": "Hyundai",
		"model": "556",
		"trailer_type": "Refrigerado",
		"license_plate": "N2F1F6",
		"color": "Añil",
		"year": 2016,
		"chassis_serial": "KYA45XND1NB",
		"engine_serial": "IBO84IOB8DG",
		"mileage": 87580
	})  
  
  car.save(function (error, car) {
    error ? console.error(error) : car.trip()
  })
  
  v.save(function (error, v) {
    error ? console.error(error) : v.trip()
  })
  
  /*Vehicle.find(function (error, vehicles) {
    error ? console.error(error) : console.log(vehicles)
  })*/
 
  Vehicle.find({ trailer_type: /^Norm/ }, function (error, cars) {
    error ? console.error(error) : console.log(cars)
  })

})