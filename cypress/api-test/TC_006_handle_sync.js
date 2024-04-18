describe('Handling async request in cypress', () => {
    it('should be able to wait until a request resolved', async() => {
        let response = await cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        })
        expect(response.status).to.eq(200)
        expect(response.body.length).to.eq(100)
    });
});