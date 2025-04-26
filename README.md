# Meta Front-End

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








