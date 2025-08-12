describe('Posts API - CRUD simulado', () => {
  it('GET /posts retorna 200 e array', () => {
    cy.request('/posts').then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.be.an('array').and.not.be.empty
    })
  })

  it('POST /posts cria (simulado) e retorna 201 + id', () => {
    const payload = { title: 'Projeto QA', body: 'Conteúdo', userId: 1 }
    cy.request('POST', '/posts', payload).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.include(payload)
      expect(res.body).to.have.property('id') // normalmente 101
    })
  })

  it('PUT /posts/1 atualiza (simulado) e retorna 200', () => {
    const payload = { id: 1, title: 'Atualizado', body: 'Novo', userId: 1 }
    cy.request('PUT', '/posts/1', payload).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.deep.equal(payload)
    })
  })

  it('DELETE /posts/1 apaga (simulado) e retorna 200', () => {
    cy.request('DELETE', '/posts/1').then((res) => {
      expect(res.status).to.eq(200)       // JSONPlaceholder retorna 200
      expect(res.body).to.be.empty
    })
  })
})
