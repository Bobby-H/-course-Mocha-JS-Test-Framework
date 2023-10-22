// before(), after(), beforeEach(), & afterEach()
describe('Mocha Hooks', function() {
    
    before('Execute before all tests', function() {
        console.log('Execute before all tests');
    });

    beforeEach('Execute before each test', function() {
        console.log('Execute before each test');
    });

    it('is an example of the 4 hook varieties in mocha', function() {
        console.log('Mocha - This is a test for mocha hooks');
    });

    after('Execute after all tests have run', function() {
        console.log('Execute after all tests have run');
    });

    afterEach('Execute after each test has run', function() {
        console.log('Execute after each test has run');
    });

});