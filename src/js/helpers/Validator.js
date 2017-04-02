import _ from 'lodash';

var Ajv = require('ajv');
var ajv = new Ajv(); 

ajv.addKeyword('ValidateSelector', { validate: function(schema, data) {
	var jsonParsed = JSON.parse(data);
	if (_.has(jsonParsed, schema.selector)) {
		switch(schema.operator) {
			case 'EQUAL':
				console.log('The selector values are equal? ',_.get(jsonParsed,schema.selector) == schema.value);
				return _.get(jsonParsed,schema.selector) == schema.value;
				break;
			default:
				break;
		}
	}
}, errors: false });

function Validate(selector, operator, value, currentData) {
	var schema = { "ValidateSelector": {"selector": selector, "operator": operator, "value": value }}
	var validate = ajv.compile(schema);
	console.log(validate(currentData)); // true

}	
 
export default Validate;