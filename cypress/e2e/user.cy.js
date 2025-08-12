describe('Users API - JSONPlaceholder', () => {
  it('GET /users retorna 200 e lista', () => {
    cy.request('/users').then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.be.an('array').and.not.be.empty
      const u = res.body[0]
      expect(u).to.have.keys(['id','name','username','email','address','phone','website','company'])
    })
  })
})