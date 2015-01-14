angular-components-example
==========================

If you're looking at this repository then you're likely about to start working on Portal angular components, this repo demonstrates how to go about it.

This project contains a very simple implementation of a telephone directory which records the name and phone number of an individual, allowing you to add edit and remove numbers and persist them to a backend data store.  In practice there is no backend, we've mocked out $http as backend services are beyond the scope of this example.  

The first things to draw your attention to are the html template files under ui/directory, namely ace-edit and ace-list.  If you inspect these files you should find that you can more or less work out whats going on just going by the directive names and attributes, which is part of the beauty of rolling your own component directives, lovely declarative HTML.
 
## ace-edit.html
Here we have a simple view with two input boxes and a submit button.  Looking at the first input it should be fairly apparent that it's bound to the name property of our record model, it's a required field of minimum length 3 and label read "Name".  Moving on a little we've got a couple of error messages which show when the field is invalid.  


# Brain dump below this point

Services
Reusable component
Multiple validated inputs
Buttons
CRUD
angular routing
caching

Directory Service
whenGET({
  id:1,
  name: 'John Evans',
  number: '12345678901'
});

Edit/Create Component
- name input
- number input
- create/save button
- ace-edit
  - ace-input (name, number)
  - ace-button (save)


List Component
- list of everything
- edit each item in list
- create button
- delete button
- ace-list
  - ace-button (create)
  - which is an ng-repeat of ace-record
    - has ace-button (delete, edit)
    