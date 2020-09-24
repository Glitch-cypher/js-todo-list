# Todo List Challenge

Using our knowledge of events and listeners, we are going to make a todo list.

## Step 1

Create a text input, a button and an unordered list in index.html as well as linking the JS and CSS files. Give the input placeholder attribute a value of "to do...".

## Step 2

Add an event listener to the button which calls a function. This function should add the current value of the text input to a new new list item and add that list item to the unordered list. After this, set the value of the input back to an empty string. If the input field is empty, the function should return early.

## Step 3

Add a new button which when clicked loops through the array of daily todos and adds them as list items to the unordered list.

## Step 4

Write a function that will take in an event object and change the color of the event.target to `lightgreen`. Remember that the target of the event is the element which the event comes from.

When creating a new list item in step 2, add a listener to each new item that listens to the click event. When the item is clicked, call the function that you've just written.

## Step 5 - Experiment

- see what other features you can add...
  - have the todo added when the enter key is pressed
  - make a button that will clear the whole list
  - make a dropdown using the select tag and add a priority to the todo, change the color accordingly
