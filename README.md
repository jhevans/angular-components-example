angular-components-example
==========================

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
    
  
