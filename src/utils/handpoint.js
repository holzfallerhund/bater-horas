import {
    apply,
    dropLast,
    flip,
    map,
    pipe,
    pluck,
    splitEvery,
    subtract,
    sum
} from 'ramda'

const msToHours = ms => ms / 1000 / 60 / 60

const hoursSumBtwnDates = pipe(
    pluck('date'),
    splitEvery(2),
    map(apply(flip(subtract))),
    sum,
    msToHours
)

const dropLastDate = dates => hoursSumBtwnDates(dropLast(1)(dates))

export const handPointHours = appointments =>
    appointments.length % 2 === 0
        ? hoursSumBtwnDates(appointments)
        : dropLastDate(appointments)
