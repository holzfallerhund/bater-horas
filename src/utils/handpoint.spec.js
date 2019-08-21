const expect = require('chai').expect

import { handPointHours } from './handpoint'

it('Check if do the right calc. betwen two dates', () => {
    const apoitments = [
        { date: new Date(2019, 6, 6, 6, 6) },
        { date: new Date(2019, 6, 6, 7, 6) }
    ]
    expect(handPointHours(apoitments)).to.be.equal(1)
})

it('Check if do the right calc. betwen four dates', () => {
    const apoitments = [
        { date: new Date(2019, 6, 6, 6, 6) },
        { date: new Date(2019, 6, 6, 7, 6) },
        { date: new Date(2019, 6, 6, 7, 6) },
        { date: new Date(2019, 6, 6, 8, 6) }
    ]
    expect(handPointHours(apoitments)).to.be.equal(2)
})

it('Check if do the right calc. betwen five dates', () => {
    const apoitments = [
        { date: new Date(2019, 6, 6, 6, 6) },
        { date: new Date(2019, 6, 6, 7, 6) },
        { date: new Date(2019, 6, 6, 7, 6) },
        { date: new Date(2019, 6, 6, 8, 6) },
        { date: new Date(2019, 6, 6, 9, 6) }
    ]

    expect(handPointHours(apoitments)).to.be.equal(2)
})
