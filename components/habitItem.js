"use strict"

export function renderHabitItem(habitList, ul, updateHabits) {
    // create li element

    const li = document.createElement('li');
    li.setAttribute('data-id', habitList.id);

    const span = document.createElement('span');
    span.textContent = `${habitList.habit} - ${habitList.desc}`;
    span.classList.add('through');
    span.classList.toggle('through')

    const deleteButton = document.createElement('button');
    const img = document.createElement('img');
    img.src = '../images/delete-48.png';
    deleteButton.appendChild(img);

    const checkButton = document.createElement('button');
    const checkImg = document.createElement('img');
    checkImg.src = '../images/check-mark-48.png';
    checkButton.classList.add('check');
    checkButton.appendChild(checkImg);
    li.appendChild(span);
    li.appendChild(checkButton);
    li.appendChild(deleteButton);
    ul.appendChild(li);

    checkButton.addEventListener('click', (e) => {
        e.preventDefault();
        span.classList.toggle('through');
    });

    deleteButton.addEventListener('click', () => {
        ul.removeChild(li);

        if (updateHabits) {
            updateHabits((prevHabit) => {
                const updatedHabit = prevHabit.filter(habit => habit.id !== habitList.id);
                localStorage.setItem('habitList', JSON.stringify(updatedHabit));
                return updatedHabit;
            });
        }
    });
}