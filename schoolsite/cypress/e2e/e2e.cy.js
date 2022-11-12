const username = 'testUser'
const password = 'testUser'

describe('Full test', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/')
  })
  it('register user', () => {
    cy.get('[id="loginButton"]').click()
    cy.get('[class="refRegist"]').click()
    cy.get('[id="name"]').type(username)
    cy.get('[id="password"]').type(password)
    cy.get('[id="password_repeat"]').type(password)
    cy.get('[class="btn"]').click()
  })
  it('login in to user', () => {
    cy.get('[id="email"]').type(username)
    cy.get('[id="password"]').type(password)
    cy.get('[class="btn"]').click()
  })

  it('create new student', () => {
    cy.request({
      url: 'http://localhost:5000/auth/login',
      method: 'POST',
      body: {username: username, password: password},
    }).then((res) => {
      expect(res.body).to.have.property('token');
      window.localStorage.setItem('JWTtoken', res.body.token)
      window.localStorage.setItem('isAuth', true)
    }); 
    cy.get('[id="journalClick"]').click()
    cy.get('[class="btnRegistAdmin"]').click()
    cy.get('[id="name"]').type("Ксенія Олександрівна Макара")
    cy.get('[id="formClass"]').type(2)
    cy.get('[class="btnAdd"]').click()
    cy.get('[class="btnClose"]').click()
  })
  it('set 2 marks', () => {
    cy.get('[name="subject"]').select('Математика')
    cy.get('[name="form-class"]').select('3 клас')
    cy.get('[id="Ксенія Олександрівна Макара-1"]').type(22)
    cy.get('[id="Ксенія Олександрівна Макара-3"]').type(44)

  })
  it('logout from system', () => {
    cy.get('[class="buttonExit"]').click()
    window.localStorage.clear()
  })
})