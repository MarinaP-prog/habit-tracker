import {generateId} from './idGenerator.js'

export function addHabit(habit, desc) {
    const newHabit = {id: generateId(), habit: habit, desc: desc};
    return newHabit;
}