"use strict";
function createGoal(title, date, educationLevel) {
    let Goal = {};
    Goal.date = date;
    Goal.educationLevel = educationLevel;
    Goal.title = title;
    return Goal;
}
