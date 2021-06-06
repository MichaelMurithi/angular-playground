# Intro

This are the key points I learnt while creating the stock market app using angular.

It is an implementation of a pdf angular course downloaded here: https://www.pdfdrive.com/angular-up-and-running-learning-angular-step-by-step-e176364392.html

### Event Binding and data flow

- `[]` - Square bracket notation for data binding
- `()` - Round bracket notation for event binding

Any time you see the square bracket notation, you can be
assured that it is data flowing from the component into the HTML. Any time you see
the parentheses notation, you are guaranteed that it refers to an event and flows from
a user action to the component.

### Using models for cleaner code

- They are a best practice to help us write cleaner code

- To generate a model skeleton class using angular we use:

`ng generate class <<folder/file-name>>`

## Directives

### Structural directives

Structural directives in Angular follow a very particular syntax, which makes it easy
to recognize when a directive is a structural directive versus a normal one.

All strutural
directives in Angular start with an asterisk (\*), like:

`*ngIf` - Used for conditionally showing/hiding elements

`*ngFor` - directive is used for creating multiple elements, usually one for each instance of
some or the other object in an array
