# Assigment 1

Before we start with any type of web application development the first thing, we should understand is how the browser works. So, in this post we will try to understand how the web browser works and some of the things that are going on in behind when we enter a URL or search for any content in website browsers.

So, some of the points that we are going to look for in this post is given below.

a. What is the main functionality of the browser?

b. High Level Components of a browser.

c. Rendering engine and its use.

d. Parsers (HTML, CSS, etc)

e. Script Processors

f. Tree construction

g. Order of script processing

h. Layout and Painting

## What is the main functionality of the browser?

**	Before we start with understanding functionality let’s checkout different type of browsers that are available int the market today.

![A picture containing logo

Description automatically generated](browser_types.png)

Image 1.1 Different Browsers available in market

![](browser_usage.png)

Image 1.2 Desktop browser market Share

## So, what is the main functionality of all this browser?

A desktop/mobile application developed to navigate through available contents in the **World Wild Web** (WWW). What it basically does is whatever information we ask for is basically stored in a web server (Note: webserver is a type of storage available to access for public from any part of the world in lay man terms). When we ask for such information, such as searching a particular URL like ([www.google.com](http://www.google.com)) it goes to web server and take the information that is available in the server and present it to the user in the HTML format which is understood by the browser.

Below is the flow provided in an image format for easy understanding what exactly does a web browser do when a particular URL is searched by the user in the browser.

`	`![Diagram

Description automatically generated](how_browser_works.png)


As shown in the above diagram we will try to understand how browser works in deep.

When any user tries to enter a domain name the first thing that the user browser check is for internet connection this internet connections are provided by Internet Service Provider (ISP) some examples of ISP are JIO Broadband, Airtel Broadband Network etc. This ISP provider’s get the request of what the user wants, and they check through rules and regulation if that website is available or not and if it’s accessible for that country user or not such types of rules and regulation that are provided by the government are verified once that is done.

Once that is done it will. Check for the IP address. So, what is an IP address? Each URL has a particular IP address which are unique so that WWW would be able to identify them.

For example, IP address for [www.google.com](http://www.google.com) is 142.250.199.164 if you search with the IP address also it will redirect to the google website.

Once ISP get to know which IP address to visit it will go to that IP address server and ask for content that should be provided to the user. The content then is sent back to ISP and ISP provides the content to the user. The content may be in any format once of the main format that we usually see is HTML and CSS by which we are able to access the website that is provided to the user.

**

## High Level Components of a browser

There are 5 main components of a web browser they are User Interface, Browser Engine, Networking, Data Storage, JavaScript Interpreter.

Let’s try to understand each component in detail.

1. User Interface: So, user interface basically means thing that can be used by the user so that he/she can interact with the browser some of the features that users mainly use are bookmark, menu, search bar, refresh button, etc.
2. Browser Engine:
3. Networking:
4. Data Storage:
5. JavaScript Interpreter:

## Rendering engine and its use:**

Rendering engine are software’s that are available in browser to show the content on screen based on what is provided for example there may be text, image. With the help of engine whatever structured text is from a document is provided mostly html content and format the given structured text to given style declaration some example of render engines are Blink, Webkit, Edge HTML.

## Parsers (HTML, CSS, etc.)

Parsing and rendering turn html content into web page with color and background image

HTML Parsing: Html Text -> Tokenization -> Dom Tree

CSS Parsing: CSS Text -> Tokenization -> CSSOM Tree

DOM and CSSOM are merged to form a Render Tree

Render Tree has all the information required to mark and paint the screen.

Render Tree -> Layout -> Paint

The layout does the maths for placing the elements. Paint paints the elements with colours, backgrounds, shadows, etc.

## Script Processors

The Script processor allows you to specify your own processor logic which needed to be performed in the browser for a simple processor using JavaScript. The script is entered as an option on the script processor.

## Tree Construction

To make selecting any one of them fast and easy, the creators of HTML came up with a very elegant way to organize them. The brilliant idea is to allow tags inside of tags. When we do this, we produce a data structure called a tree structure.

HTML: data structure = tree structure

Like a real tree, a tree structure in HTML begins from the root tag which is appropriately named html:

```html
<html></html>
```
Then, inside this root tag, we have 2 and only 2 special tags: The head tag:

```html
<html><head></head></html>
```
And the body tag:
```html
<html><head></head><body></body></html>
```
Written like this, it’s quite difficult to tell that the head and body tags are inside the html tag.
```html
<html><head></head><body></body></html>
```
So a best practice developed among coders. The convention is to indent them like this:
```html
<html>
`   `<head></head>
`   `<body></body>
</html>
```
Right away, we can clearly and easily tell that the head and body tags are inside the html tag:
```html
<html>
`   `<head></head>
`   `<body></body>
</html>
```
Just like a family tree, we can refer to the head and body tags as the children of the html tag:
```html
<html>
`   `<head></head>
`   `<body></body>
</html>
```
And the html tag as the parent of the head tag and body tag:
```html
<html>
`   `<head></head>
`   `<body></body>
</html>
```
We could even be more specific and refer to the head tag as the first child of the html tag:
```html
<html>
`   `<head></head>
`   `<body></body>
</html>
```
And the body tag as the last child of the html tag:
```html
<html>
`   `<head></head>
`   `<body></body>
</html>
```



## Order of script processing

Script process is the performance of the behaviors or events contained in the knowledge structure. Many facets of organizational behavior can be effectively described, analyzed, and understood by using the script concept and processing notion

## Layout and Painting

A HTML layout is a road map/ blueprint of what the page has, and CSS is helps to painting concept of what the element should look like.

Below is a diagram of how a html layout look like

![](html_layout.png)
