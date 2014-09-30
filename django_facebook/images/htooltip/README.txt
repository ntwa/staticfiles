READ ME:
*********

This software is developed and copyrighted by HIOX Softwares.
This is given under The GNU General Public License (GPL).
This version is htooltip 1.0


Features:
----------
a)This javascript will help you to build tooltip for a link / button in a webpage as you wish.
b)You can build more number of tooltips in the same webpage.


Downloads:
-----------
Please visit our site http://www.hioxindia.com and do the download.


Installation:
--------------
Please take 5 minutes time and read installation instructions carefully and
completely! This will ensure a proper and easy installation 

a) Unzip the file htooltip.zip  to extract the files to the folder.
b) You will get the image files for the tool tip.

Embedding the code:
a) Include the html code in the body tag of your file, Java Script, CSS
Script, in the head tag of the file.
 
Configuring the Image Tooltip Table Script:
a) You will get the images used in this JavaScript and if you want to use this
images
   then include the following line,
        pic1.src='htooltip/bubble_top.gif';
        pic2.src='htooltip/bubble_middle.gif';
        pic3.src='htooltip/bubble_bottom.gif';

b) If you want to change the message then add your Message in Javascript code
    var text1 = "Your tooltip Message";
    var text2 = "Your tooltip Message";
    You can add as many messages as your wish.

c) Html content 
   <input type="button" id="b1" value="Button"
onmouseover="showToolTip(event,text1)" onmouseout="hideToolTip()">
   <a href="#" onmouseover="showToolTip(event,text2)"
onmouseout="hideToolTip()">LINK</a>

Your message is passed as argument for the JavaScript function
showtooltip(event,text1)

d) When the mouse is pointed over the button or link, the function
showtooltip(event,text) is triggered and the tooltip is displayed.
e) When the mouse is taken out, the function hidetooltip() is triggered and
hides the tooltips.
f) Copy the code into your page and use the script.


Releases:
----------
Release Date htooltip 1.0 : 23-12-2007.
On any suggestions mail to us at support@hscripts.com

Visit us at http://www.hscripts.com
Visit us at http://www.hioxindia.com
