# fs-resuable-profile-card-component

In this workshop, you will learn how to work with props by building a reusable profile card component.

Step 1
In this project, you will learn how to work with props by building a reusable profile card component.

Start by using the export keyword to create a Card functional component with name, title, and bio as the props. Don't forget to make sure they're all wrapped in a curly brace. That way, you destructure them instead of accessing them from props.

Also, return a pair of parentheses with an empty string inside of them for now.

Step 2
Inside the return, remove the empty string, then create a div element with a className of card.

Step 3
Inside the div element, create an h2 element and interpolate the name prop as its text.

Also, inside the div, create a paragraph with the className of card-title to interpolate the title prop, and another paragraph to interpolate the bio prop.

Step 4
To start using the Card component, use the export keyword to create an App functional component.

Inside the App component, return a pair of parentheses containing an empty string.

Step 5
Inside your return statement, replace the empty string with a div element with a className property of flex-container.

Step 6
Now, put the Card component into your App component. Give it the name prop set to "Mark", the title prop set to "Frontend developer", and the bio set to "I like to work with different frontend technologies and play video games."

Step 7
Again, use the Card component two more times with the following:

Props	First Card Values	Second Card Values
name	"Tiffany"	"Doug"
title	"Engineering manager"	"Backend developer"
bio	"I have worked in tech for 15 years and love to help people grow in this industry."	"I have been a software developer for over 20 years and I love working with Go and Rust."
With that, your reusable profile card component project is complete!