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

- `*ngIf` - Used for conditionally showing/hiding elements

- `*ngFor` - directive is used for creating multiple elements, usually one for each instance of
  some or the other object in an array

Instance variables avaiable with the \*ngFor directive:

- `index` - specifies the index of the current item.
- `even` - this is true when the item has an even index
- `odd` - true when the item has an odd index
- `first` - true when the item is the first item in the array
- `last` - true when the item is the last item in the array

* `trackBy` - used when we are going to reload the list (for example, loading it from an
  observable that makes a server call). It helps in
  performance:

- It takes a `trackByFunction` which should return the value by which to track items in the list

* `ngSwitch` - it is an attribute directive
  It contains:

- `ngSwitchCase` and `ngSwitchDefault` structural directives which add or remove elements based on the case

## Components

More on components:

### Selectors:

The selectors can be defined in various ways depeding on their use including:

- `selector: app-stock.html` - In this case the selector is used as `<app-stock-html></app-stock-html>`

- `.app-stock-html` - Would result in the selector being used as a css class like:

  `<div class="app-stock-html">`

- `[app-stock-html]` - would result in a selector being used as an attribute on a resulting item.

### Style Encapsulation

- `ViewEncapsulation.Emulated` - Angular creates shimmed CSS to emulate the behavior that shadow DOMs and shadow roots provide.
- `ViewEncapsulation.Native` - Angular will use shadow roots. This will only work on browsers and platforms that natively support it.

- `ViewEncapsulation.None` - Uses global CSS, without any encapsulation.

e.g `encapsulation: ViewEncapsulation.None` - allows the declared attributes in style to be shared through out the module

### Stripping white spaces

- Stripping white spaces helps reduce the bundle size by compressing the HTMl
- Set by using `preserveWhiteSpace:true/false` attribute on the component

### Animation

- Angular provides multiple triggers to control and animate each part of the component and its lifecycle

### interpolation

- Used to overide the default interpolation markers in angular
- By providing an array of 2 strings e.g:
  `interpolation: ["<<", ">>"]` to replace the interpolation symbols for that component

### View providers

- Allow you to define providers that inject classes/services into a
  component or any of its children

### changeDetection

- Enables us to control how and when angular updates the UI
  e.g We can overide the values from `ChangeDetectionStrategy.Default` to `ChangeDetectionStrategy.OnPush`
  i.e after the first render it will be up to us to let angular know when the value changes

### declarations

- It ensures that components and modules are available for use within the scope of the module

### imports

- Allows you to specify attributes that you want imported and accessible through your module

### exports

- Relevant when you have multiple modules or you need to create a module that will be used by other developers

## Decorators

### Input

Automatically allows you
to pass in values to the component for that particular input via Angular’s data binding syntax.

### Change Detection Strategy:

Defines how the components respond to a change in the parect/child component

example: `changeDetection: ChangeDetectionStrategy.OnPush`

### Component Lifecycle

The methods are called in the following order:

- **constructor**()
- **ngOnChanges**()
- **ngOnInit**()
- **ngDoCheck**()

  **ngAfterContentInit**()
  **ngAfterContentChecked()**
  **ngAfterViewInit()**
  **ngAfterViewChecked()**

- **ngOnDestroy**

The various interfaces must be implemented alongside with the lifecycle hooks

### **ViewChildren**

It is any child component whose tags/selectors appear within the template of the component

### **ContentChildren**

Any child component that gets projected into the view of the
ContentChildren
component, but is not directly included in the template within the component

### Component Projection

Projection is useful when we want to build components but set some parts of the UI
of the component to not be an innate part of it.

## Testing

There are different frameworks that can be used for testing in angular:

### Jasmine

- Oriented towards writing specifications rather than traditional unit tests
- Can be used to write specs for any code, not just angular

### Karma

- The test running framework

### Protractor

Protractor supports the
capability of running the real angular application and simulating actions and verifying
behavior, thus completing the circle of testing.

## Testing

### Karma Config

- Serves as the configuartion files for how karma should find and execute files

Identifies:

- The various plug-ins needed for Karma to run

- The file it needs to watch /execute
- Coverage reporting (coverageIstanbulReporter)
- Port it needs to run on (port)
- The browser to run it on (browssers)
- Whether it dhould re-run everytime the file changes (autoWatch)
- The level of logs it needs to capture

### test.ts

- Responsible for loading all our components, related specs and the testing framework and utilities needed to run them

#### Isolated Unit Test

- It is a vanilla Js unit test
- Just instantiates classes and methods and executes them

## Forms

- For two-way data binding, **banana-in-a-Box syntax** `[(ngModel)]` is used.

- Expanded ngModel Variant:
  Involves using `[ngModel]` and `(ngModelChange)`

### Form validity states:

| Control state | CSS class if True | CSS class if False |
| :------------ | :---------------: | -----------------: |
| Visited       |    ng-touched     |       ng-untouched |
| Changed       |     ng-dirty      |        ng-pristine |
| Valid         |     ng-valid      |         ng-invalid |

### Reactive Forms

- It is the concept of writing a program in a way that it fundamentally deals with and acts on asynchronous data streams

  - The entire tree of Angular form control objects is defined in the component code and then bind to native form control objects in the template.
  - The component can push data model changes into the form control because it has access to the form control as well as the backing data:

#### **Form** **Controls**

- It directly represents an individual form element in the template.
- Used to asign initial values and validators
- The first argument of the FormControl validator is the default value.
- The second argument is an single validator or a array of validators.

**Steps**:

1. Import _ReactiveFormsModule_ into the main app.module.ts
2. Create a **FormControl** instance in the component
3. Bind the FormControl instance to the input element

#### **Form Groups**

- They are usefull as a way to group relevant form fields under one group

#### Fields Validation

- For each form element, we add a div to show conditional error messages
- `.get()` on a form group used to get an individual form element
