const expect = require('chai').expect;
const generateUserArray = require('../routes/users').generateUserArray;

describe('User Route', function() {
	describe('#generateUserArray', function(){
		it('should generate given amount of users', function() {
			const users = generateUserArray(10);

			expect(users).to.have.lengthOf(10);
			users.forEach((user) => {
			expect(users[0]).to.have.property('name');
			expect(users[0]).to.have.property('username');
			expect(users[0]).to.have.property('email');
		});
	});
});
});
