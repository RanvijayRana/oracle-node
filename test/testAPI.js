const chai = require('chai');
const index = require('./../index');
const request = require('supertest');

let should = chai.should();

describe('Api test', () => {
    it('number validate', () => {
        let num =8;
        chai.assert.isNumber(num);
    })
    it('createTable api test', (done) => {
        let data = {
            'table' : 'pnb'
        }
        request(index.server)
            .get(`/createTable?table=${data.table}`)
            .set('accept','application/json')
            .expect('Content-Type', /json/)
            .expect(200,done());
    })
    it('signup api test', (done) => {
        let data = {
            'id' : 11111,
            'fName': 'Emma',
            'lName': 'Watson'
        }
        request(index.server)
            .get(`/signUp?id=${data.table}&fName=${data.fName}&lName=${data.lName}`)
            .set('accept','application/json')
            .expect('Content-Type', /json/)
            .expect(200,done());
    })
    it('login api test', (done) => {
        let data = {
            'accountNumber' : 11111
        }
        request(index.server)
            .get(`/login?id=${data.accountNumber}`)
            .set('accept','application/json')
            .expect('Content-Type', /json/)
            .expect(200,done());
    })
    it('viewAll api test', (done) => {
        request(index.server)
            .get(`/viewAll`)
            .set('accept','application/json')
            .expect('Content-Type', /json/)
            .expect(200,done());
    })
    it('deleteTable api test', (done) => {
        let data = {
            'table' : 'pnb'
        }
        request(index.server)
            .get(`/deleteTable?table=${data.table}`)
            .set('accept','application/json')
            .expect('Content-Type', /json/)
            .expect(200,done());
    })
    
})