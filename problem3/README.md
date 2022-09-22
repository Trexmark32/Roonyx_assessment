Problem 3:

Component Interaction:

In 3 ways:

parent to child - sharing data via input
Pros:

We can pass data from parent to child component where two components have parent and child relationship.
Cons:

It is a one way data transfer method. we can't get two way data transfer using this.
If data changes in parent then it does not change value in child.. for that we will have to use ngOnChanges lifecycle hook method.
Solution it fits in:

It is best to share data from parent to child in parent child relationship scenarios between the components.
child to parent - sharing data via viewChild with AfterViewInit
Pros:

we can pass data from child to parent component where two components have parent and child relationship.
Cons:

it is a one way data transfer method. we can't get two way data transfer using this.
Solution it fits in:

It is best to share data from child component to parent component in parent child relationship scenarios between the components.
child to parent - sharing data via output and EventEmitter
Pros:

we can pass data from child to parent component where two components have parent and child relationship.
Cons:

it is a one way data transfer method. we can't get two way data transfer using this.
Solution it fits in:

It is best to share data from child component to parent component in parent child relationship scenarios between the components.
