"use strict"
import {addHabit} from '../utils/habitUtils.js';
import {renderHabitItem} from './habitItem.js';

let habitList = localStorage.getItem('habitList') ? JSON.parse(localStorage.getItem('habitList')) : []; // array for holding values

export function renderHabitList() {
    const container = document.createElement('div');
    container.innerHTML = ` 
    <form>
    <h2>Habit list</h2>
    <input data-id="habit-input" placeholder="Habit for today *required">
    <input data-id="desc-input" placeholder="Enter description">
    <button data-id="add-btn" class="add"><img src="./images/save-48.png">Add new habit</button>
    <button data-id="show-btn" class="show"><img src="./images/refresh-48.png">Show habits</button>
    <ul data-id="list" >
    </ul>
    </form>
    `;

    const habitInput = container.querySelector('[data-id="habit-input"]');
    const descInput = container.querySelector('[data-id="desc-input"]');
    const ul = container.querySelector('[data-id="list"]');
    const addButton = container.querySelector('[data-id="add-btn"]');
    const showButton = container.querySelector('[data-id="show-btn"]');

    // add a habit

    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        const habit = habitInput.value.trim(); // delete white spaces
        const desc = descInput.value.trim();
        if (!habit) return;
        habitInput.value = ''; // empty input
        descInput.value = '';
        const newHabit = addHabit(habit, desc); // object
        habitList.push(newHabit);
        localStorage.setItem('habitList', JSON.stringify(habitList)); // save value to localstorage

        // show habits
        renderHabitItem(newHabit, ul, (updateHabits) => {
            habitList = updateHabits(habitList);
        })
    })

    showButton.addEventListener('click', () => {
        ul.innerHTML = ''; // delete all li

        // crate li again
        habitList.forEach(habit => {
            renderHabitItem(habit, ul, (updateHabits) => {
                habitList = updateHabits(habitList);
            })
        })
    })
    // if there are some habits in the local storage - show them
    habitList.forEach(habit => {
        renderHabitItem(habit, ul, (updateHabits) => {
            habitList = updateHabits(habitList);
            localStorage.setItem('habitList', JSON.stringify(habitList));
        })
    })
    return container;
}
