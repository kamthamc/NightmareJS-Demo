const Nightmare = require('nightmare');
const assert = require('assert');

describe('Resume', function () {
  // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
  this.timeout('30s');

  let nightmare = null;

  beforeEach(() => {
    nightmare = new Nightmare({
      show: false
    });
  });

  describe('/ (Home Page)', () => {
    it('should load without error', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('https://kamthamc.github.io/resume/')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  });

  describe('Twitter Link', () => {
    it('should work without timing out', done => {
      nightmare
        .goto('https://kamthamc.github.io/resume/')
        .click('.social a.twitter')
        .wait(2000)
        .end()
        .then(result => {
          console.log(result);
          done()
        })
        .catch(done)
    })
  })
});
