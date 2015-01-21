var customer = {
	"name": "Jose",
	"telefonia": "Tigo",
	"celular": "Samsung Galaxy S3",
	"minuto": 0.15,
	"plan": 100,
	"gastoMinutos": 350,
	"activo": true
};

var customer1 = {
	"name": "Julia",
	"telefonia": "Claro",
	"celular": "Huawei Y320",
	"minuto": 0.10,
	"plan": 300,
	"gastoMinutos": 400,
	"activo": true
};

//Comparar precios y dar un bono en minutos para el que presente mayor gasto en el mes.

var bono = 200;

var precioCustomer = (customer.gastoMinutos - customer.plan)*customer.minuto; 
var precioCustomer1 =  (customer1.gastoMinutos - customer1.plan)*customer1.minuto;

if(precioCustomer<precioCustomer1){

	customer1.plan = customer1.plan + bono;
	console.log("El nuevo bono en minutos para "+customer1.name+" es: "+customer1.plan);

}else{
	customer.plan = customer.plan + bono;
	console.log("El nuevo bono en minutos para "+customer.name+" es: "+customer.plan);
}

