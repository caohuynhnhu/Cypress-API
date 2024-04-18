import {
    DEFAULT
} from '../utils/Method'

describe('Testing DELETE request', () => {
    it('should be able to send a DELTE request', () => {
        cy.request({
            method: DEFAULT.delete,
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        }).then(res => {
            expect(res.status).to.eq(200, 'Verifying response header')
        })
    });
});