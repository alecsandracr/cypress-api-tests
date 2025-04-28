import '../../support/commands'

describe('Realizar Login', () => {

    it('Realizar login com sucesso', () => {
        //carrega os dados do arquivo json localizada na fixture, then 
        cy.fixture('usuarios/realizarLogin').then((usuario) => {
            cy.realizarLogin(usuario.email, usuario.password).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('token')
            })
        })
    })

    it('Realizar login com ausência de senha', () => {
        cy.fixture('usuarios/ausenciaSenha').then((usuario) => {
            cy.loginAusenciaSenha(usuario.email, ' ').then((response) => {
                expect(response.status).to.eq(400)
                //Não retornou a mensagem esperada
                expect(response.body.error).to.eq("user not found")
            })
        })
    })
})




