'use strict';

import server from 'server';
import request from 'supertest';
import should from 'should';

describe('GET daily-log', () => {
  it('responds spreadsheet rows as an array', (done) => {
    request(server)
      .get('/api/personal/daily-log')
      .end((err, res) => {
        res.body.should.be.instanceOf(Array);
        done();
      });
  });
});