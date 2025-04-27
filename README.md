# Meta Front-End

editor's note: all files in this repo have my own spin to them none of these files are a "verbaitum" copy of those done in the cert

## (C1-M2)

### HTML Syntax

Check the comments in the code files as it is more clear and provides a better understanding when seen in action

### DOM (document object model)
A tree structure representing HTML elements in a webpage, allowing JavaScript to interact with and modify the content dynamically.
It basically enables updating content whether it's visibility , styling , object exisitance (basically anything that has to do with modifying the page content)

<hr>

## (C1-M3)

### Responsive Design

<ul>

<li>
Felxible Grids<br>
make measurments in percentages not in pixels
</li>

<li>Fluid Images <br>
place the images in those grids/collumns with max-width set to 100%
</li>

<li>Media Queries<br>
Using JS developers can get the display size, orientation & Aspect Ratio<br>

<br>Example:<br>
@media only screen and(max-width:700px){<br>
    body{<br>
        background-color:blue;<br>
    }<br>
}<br>

</li>

</ul>

### Bootstrap Grid System

Bootstrap has a 12 grid system each row can have a maximum of 12 collumns. Usually, bootstrap automatically allocates the number of collumns needed. We can specify the number of collumns a collumn takeslets suppose we want a div to take 4 coloumns we'll use:

col-4

we can also specify the number of collumns used based on the screen size in order to guarantee a responsive design using the following suffixes

![image](https://github.com/user-attachments/assets/5a988c45-e865-4d1b-8d01-eca661026dc1)

for more on this <a href="https://getbootstrap.com/docs/4.0/layout/grid/">click here</a>

you can see this in practice in the bootstrapexplainedpt2.html file

### Bootstrap Cards and forms

as shown in the bootstrapexplainedpt3.html file we can use cards for a smoother layout as seen below:

<img width="1370" alt="Screenshot 2025-04-27 at 12 31 34 AM" src="https://github.com/user-attachments/assets/0fb2e06e-a1e0-47bc-a99a-72c71f845660" />

for more inputs and form control <a href="https://getbootstrap.com/docs/5.0/forms/form-control/">click here</a>

### Dynamic vs Static

Static content consists of files that are sent from the web server to the browser exactly as they are stored, such as images and videos.

Dynamic content is generated in real-time based on user input or other variables, like the current date, and typically takes longer to produce than static content.

### Single Page Applications (SPA)

Simple and easy to use 
one html page that gets it's contetnt updated based on how the users interact 
there are two methods to build an SPA:

<ul>
    <li> <b>Bundling</b>: server provides all the necessary components for the page</li>
    <li> <b>Lazy Loading</b>: server provides minumum resources</li>
</ul>

SPA's use JSON to update pages instead of replacing them with entire HTML files

### React

used to develop single page applications and mobile applications

React is made up of components those components can be used together to create a web page

React updates the virtual DOM and compares it to the previous version of the virtual DOM. If a change has occurred, only that element is updated in the browser DOM. Changes on the browser DOM cause the displayed webpage to change.






