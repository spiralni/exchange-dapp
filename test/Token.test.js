require('chai')
    .use(require('chai-as-promised'))
    .should()

const Token = artifacts.require('Token')

contract('Token', accounts => {
    const NAME = 'OSO Token'
    const SYMBOL = 'OSO'
    const DECIMALS = '18'
    const TOTAL_SUPPLY = '1000000000000000000000000'

    let token

    beforeEach(async() => {
        token = await Token.new()
    })

    describe('deployment', () => {
        it('tracks the name', async () => {
            const result = await token.name()
            result.should.equal(NAME)
        })

        it('tracks the symbol', async () => {
            const result = await token.symbol()
            result.should.equal(SYMBOL)
        })

        it('tracks the decimals', async () => {
            const result = await token.decimals()
            result.toString().should.equal(DECIMALS)
        })

        it('tracks the total supply', async () => {
            const result = await token.totalSupply()
            result.toString().should.equal(TOTAL_SUPPLY)
        })
    })
})