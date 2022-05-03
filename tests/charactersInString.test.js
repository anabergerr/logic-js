const charactersInString = require('../strings/ex1');

describe('charactersInString tests', () => {
    // por algum motivo isso ta retornando um objeto o pq eu nao sei
    it('Verifique se charactersInString e uma funcao ', () => {
        expect(typeof charactersInString).toBe('function');
    })
})