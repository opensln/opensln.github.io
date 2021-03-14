let entries = [
    {
            idBox: "022",
            titleBox:"Using React Context to Provide Access to State Across Components",
            description: "Creating a context.js file to store data in the state after requesting and receiving data by using the axios module. Wrapping all of the component tags with the provider tags in the App.js file. Setting up routes for links using the react-router-dom module. Passing in the id for the lyric search by using \"this.props.match.params.id\. Using conditional statements to handle missing data.",
            techBox: "React, Node, HTML, JavaScript & CSS",
            linkBox: "<a href=https://opensln-lyricapp.netlify.app/ target='_blank'>View project.</a> <p>*currently relies on Cors Anywhere which could be blocked at any-time.</p>"
        },

        {
            idBox: "021",
            titleBox: "Refactoring API Requests Using Async/Await, Promises and Fetch",
            description:
                "Wrapping the request method in the getDish() method so that the search term can be passed in to the url. Extracting the code that displays the data to a separate method from the request so that the request method can be changed easier.",
            techBox: "JavaScript, HTML & CSS, Async/Await",
            linkBox: "<a href=https://plnkr.co/edit/FykmHFS0ZIFN78BZ?preview target='_blank'>View Fetch project.</a> <p><a href=https://plnkr.co/edit/jOxHTy6Yh30y3MVC?preview target='_blank'>View Async/Await project.</a></p> <p><a href=https://plnkr.co/edit/SRpt4l4sCcH8aktso9Bu?preview target='_blank'>View jQuery project.</a></p>"
        },

        {
            idBox: "020",
            titleBox: "Setting and Moving State Values Between Components in React",
            description:
                "Creating quiz questions & answers and storing them as JSON objects. Using Array.map to put answer choices into the answer buttons. Using \"this.[function_name].bind(this)\" to bind functions to props names so state values can be passed up to the parent element. Sending state property values of the newly set state to another component through props so it can be used/displayed via that component.",
            techBox:"React, Node, HTML, JavaScript & CSS",
            linkBox: "<a href=https://opensln-whoseddit.netlify.app/ target='_blank'>View the project.</a>"
        },

        {
            idBox: "019",
            titleBox: "Using Components, Imports and Props with React",
            description:
                "Using \"create-react-app\" to get the starter project. Creating some mock data stored as an array of objects. Using the spread operator to add new items into the array. Using Array.map() and Array.filter() methods to check if the passed in id matches with any ids from the array items before applying some further logic. Using git and github via the terminal instead of dragging and dropping files.",
            techBox:"React, Node, HTML, JavaScript & CSS",
            linkBox: "<a href=https://opensln-todo-react.netlify.app/ target='_blank'>View the project.</a>"
        },

         {
            idBox: "018",
            titleBox:"Using Event Listeners, Event Handlers and Event Objects",
            description:
                "Using JavaScript Event Listeners to trigger functions after a user clicks an element on the screen. Passing the event object to grab the name of the clicked element by using e.target.name before using this name as a value in a conditional statement to decide the final action. Creating a conditional statement to prevent the inclusion of angle brackets in the input variable to prevent JavaScript injection. Using backticks to enable the inclusion of an embedded expression in a template literal.",
            techBox: "HTML, JavaScript & CSS",
            linkBox: "<a href=https://plnkr.co/edit/4PF0sgWqk6Y5Psx3?preview target='_blank'>View the project.</a>"
        },
        
        
        {
            idBox: "017",
            titleBox: "Using Nested Loops to Create an HTML Table",
            description:
                "Using JavaScript to create an outer-loop for the &lt;tr&gt; elements and creating an inner-loop to create and populate the &lt;td&gt; elements. Using getElementsByTagName to create/grab a collection of the values inside the &lt;td&gt; elements before pushing these into an array. Using array.shift() and array.unshift() to remove and add items to the front of the array. Using an if statement to alter some of the values of the array before pushing the new values back into the &lt;td&gt; collection. Using onchange to create a more immediate user experience.",
            techBox: "HTML, JavaScript & CSS",
            linkBox: "<a href=https://openslnblog.blogspot.com/p/instant-multiplication-grid-generator.html target='_blank'>View the project."
        },

        {
            idBox: "016",
            titleBox: "Creating a Json List from a C# List",
            description: "Creating an in memory list which is accessible via a class called \"CarData\" that holds a method called \"CreateMockData\" that returns a list to a \"newed-up\" object called \"carData\" (Lower case c) which is then assigned to a variable object named \"fetchedList\". Using the Newtonsoft.Json Nuget Package to access the JsonConvert.SerializeObject() method to assign each C# list object to the Json string before printing this to the screen. This also included the use of the Formatting.Indented overload to get the list to appear vertically as Json objects.",
            techBox: "C# and Json",
            linkBox: "<a href=https://dotnetfiddle.net/vLM8NR target='_blank'>View the project.</a>"
        },

        {
            idBox: "015",
            titleBox: "Using a Regex Pattern to limit a user input to 2 decimal places",
            description: "Using conditional logic to only proceed if the input value matches the regex pattern. Using toFixed(2) to re-assign the current value back into the current input box to 2 decimal places if the user only enters a multiple of .1 without a trailing zero. Creating a function to programmatically add a new row to the shopping list. Creating an onclick function to sum together the values of the getElementsByClassName collection.",
            techBox: "HTML, CSS, JavaScript, Regex",
            linkBox: "<a href=https://openslnblog.blogspot.com/p/quick-shopping-listroad-trip-budget.html target='_blank'>View the project.</a>",
        },

        {
            idBox: "014",
            titleBox: "Creating a database experience using JavaScript & Local Storage",
            description: "Creating an HTML table with user input fields. Setting the appropriate input tag types to text, number or readonly. Using JavaScript to push values from a getElementsByClassName collection to an array for these values. Using JSON.stringify to stringify the array before saving it to local storage. Using JavaScript to retrieve the JSON string from local storage, convert it back to an array and repopulate the table. Using JavaScript to check how much of the local storage has been used.",
            techBox: "HTML, CSS, JavaScript, JSON",
            linkBox: "<a href=https://openslnblog.blogspot.com/p/benchmarking-tool.html target='_blank'>View the project.</a>"
        },

        {
            idBox: "013",
            titleBox: "Creating an XML List from a C# List",
            description: "Creating an in memory list which is accessible via a class called \"CarData\" that holds a method called \"CreateMockData\" that returns a list to a \"newed-up\" object called \"carData\" (Lower case c) which is then assigned to a variable object named \"fetchedList\". Using XElement and XML.Linq to assign each C# list object to an XML list object. Assigning this XML list object to a variable named \"carDocument\" and printing this to the screen (or saving this to a file using the built in XML method .Save())",
            techBox: "C#, XML, XML.Linq",
            linkBox: "<a href=https://dotnetfiddle.net/p7CFCJ target='_blank'>View the project.</a>"
        },

        {
            idBox: "012",
            titleBox: "Using JavaScript to set HTML Attributes in a Multiple-Choice Quiz",
            description: "Creating multiple-choice quiz questions grouped together by a common class value. Setting the value attribute to \"true\" or \"false\" in relevant to the question group. Creating a function to set the \"name\" attribute to \"redForLater\" if the value is not the correct answer. Creating a function to disable the click function of the buttons once an answer for that group has been submitted. Setting the value of the \"name\" attribute of the correct answers to green. Setting up onclick function calls that pass in the \"this.value\", \"this.id\" and other arguments that allow the code to be more object oriented and share the functions. Creating a function to check the scores. Creating a function to check the value of the score to return an appropriate feedback statement.",
            techBox: "HTML, JavaScript & CSS",
            linkBox: "<a href=https://rwa.danielsmithldn.com/randomquiz/randomquiz01.html target='_blank'>View the project.</a>"
        },

        {
            idBox: "011",
            titleBox: "Posting Mock Data to the Screen in an MVC Project",
            description: "Setting up a model class for the &ltCar&gt objects . Setting up a \"CarData\" class to contain a list of car objects. Creating a List of car objects by populating the properties and adding the objects to the list using .add(). Wrapping a \"CreateMockData()\" method around the list to allow this list to be called from elsewhere. Creating an instance of the CarData class and passing this to the view with the .CreateMockData() extension. Using a foreach loop to create the table in the view. Using String.Format to format the car prices with commas and concatenate a £ sign to the value seeing as this site defaults to $ when using the .ToString(\"c\") function.</td>",
            techBox: "ASP.NET, C#, Razor, HTML",
            linkBox: "<a href='https://dotnetfiddle.net/didFji' target='_blank'>View the code.</a></td>"
        },

        {
            idBox: "010",
            titleBox: "Creating input validation with JavaScript",
            description: "Setting up an if statement to detect if the input is \"NaN\" or \"less than 4\" or \"greater than 10\". Creating an error message to be sent to the input box using \"document.getElementById(\"id##\").value =\". Using JavaScript to set the color via CSS by using \"document.getElementById(\"id##\").style =\". Setting the color back to black if the value is valid and the script continues to run.The project also includes a \"for-loop\" that uses the decrement \"i--\" feature.</td>",
            techBox: "JavaScript, HTML & CSS",
            linkBox: "<a href='https://plnkr.co/edit/QVpDTVS4jsXDFeIX?preview' target='_blank'>View the code.</a>"
        },

        {
            idBox:"009",
            titleBox: "Using input validation in ASP.NET/MVC",
            description: "Seting up a \"UserInfo\" class in the Model to store the input data. Setting up a View-controller with a [HttpGet] request and then setting up an overloaded version of this same controller with a [HttpPost] request with some extra ViewBag lines for reposting the data to the View. Marking data properties in the Model as [Required] and setting the error message for the user. Adding the CSS class \".validation-summary-errors\" to make sure that the error messages show up in a red color.",
            techBox: "ASP.NET/MVC, C#, HTML",
            linkBox: "<a href='https://dotnetfiddle.net/6A44I4' target='_blank'>View the code.</a>"
        },

        {
            idBox: "008",
            titleBox: "Using jQuery to request an API",
            description: "Requesting data using the JQuery syntax (this particular call arrives as a JSON Object). Accessing particular elements of the object using dot(.) notation once the data has arrived. Displaying the title and image to the page ( setting the remote image file to the background of the \"imageDiv\"). Showing the ingredients by running a loop through the array of ingredients. Setting the first letter of each ingrendient to a capital letter. (This API is from <a href=\"https://spoonacular.com/food-api/docs\" target=\"_blank\">spoonacular.com</a>).",
            techBox: "HTML, JavaScript & CSS",
            linkBox: "<a href='https://plnkr.co/edit/SRpt4l4sCcH8aktso9Bu?p=preview&preview' target='_blank'>View the code.</a>"
        },

        {
            idBox:"007",
            titleBox: "Using ViewBag in ASP.NET MVC (no data in the Model)",
            description: "Creating a method that returns a number to the \"Main\" method and sends this to the \"View\" page using ViewBag. Calling a void method from the \"Main\" method that writes directly to the \"View\" usng ViewBag from that method. Adding some CSS styling directly to the View. Click <a href=\"https://stackoverflow.com/questions/51390971/im-lost-what-happened-to-asp-net-mvc-5\" target=\"_blank\">here</a> for a post that clears up some of confusion over the .Net products/frameworks/systems. </td>",
            techBox: "ASP.NET MVC, C#, HTML & CSS",
            linkBox: "<a href='https://dotnetfiddle.net/PRJItR' target='_blank'>View the code.</a>"
        },

        {
            idBox: "006",
            titleBox: "Creating and writing out arrays in C#",
            description: "Creating methods that each create an array which is returned to the \"Main\" method. Calling a method from the \"Main\" method that writes out the items of each array (that were passed in as an arguments) into the console.",
            techBox: "C# (c-sharp)",
            linkBox: "<a href='https://dotnetfiddle.net/oQqiVb' target='_blank'>View the code.</a>"
        },

        {
            idBox: "005",
            titleBox: "Calling methods that return a string value to the main method in C#",
            description: "Calling a set of methods that each assign a line into a variable which is returned to the main method which is then written to the console.",
            techBox: "C# (c-sharp)",
            linkBox: "<a href='https://dotnetfiddle.net/G4P3sp' target='_blank'>View the code.</a>"
        },

        {
            idBox: "004",
            titleBox: "Calling a chain of void methods in C#",
            description: "Calling a void method from another void method where each method writes it's line to the console.",
            techBox: "C# (c-sharp)",
            linkBox: "<a href='https://dotnetfiddle.net/JwJ5F6' target='_blank'>View the code.</a>"
        },

        {
            idBox: "003",
            titleBox: "Sending an XMLHttpRequest",
            description: "Requesting data from <a href=\"https://openweathermap.org\" target=\"_blank\">openweathermap.org</a>. Opting to receive this as JSON data. Parsing this JSON text into a JSON Object. Accessing particular elements of the object using dot(.) notation once the data had arrived. Displaying the data/details to the page. (The documentation for this API is on the site for this project).",
            techBox: "HTML & JavaScript",
            linkBox: "<a href='https://danielsmithldn.com/rwa/requestingjsondata/requestingjsondata.html' target='_blank'>Site Link</a><br>or<br> <a href='https://plnkr.co/edit/mRKAJOV3ziNSPnR14J0J?p=preview&preview' target='_blank'>View the code.</a>"
        },

        {
            idBox: "002",
            titleBox: "Chaining Functions",
            description: "Calling a function from another function and passing a variable as an argument whilst calling this function. This project also displays the scope of local variables. The same variable names were used in each function block to highlight the fact that these variables only applied within their own function blocks.",
            techBox: "HTML & JavaScript",
            linkBox: "<a href='https://danielsmithldn.com/rwa/chain_of_functions/fish_alive.html' target='_blank'>Site Link</a><br>or<br> <a href='https://next.plnkr.co/edit/7qXNn7AsoElVJoYnYFeN?p=preview&preview' target='_blank'>View the code.</a>"
        },

        {
            idBox: "001",
            titleBox: "Creating a CSS graph from a user input",
            description: "Taking values from input cells and displaying them in a graph.",
            techBox: "HTML, CSS & JavaScript.",
            linkBox: "<a href='https://rwa.danielsmithldn.com/pointstographtable/pointstographtable.html' target='_blank'>Site Link</a><br>or<br> <a href='https://next.plnkr.co/edit/RqZLhhszAgKcwm5iXN8l?p=preview&preview' target='_blank'>View the code</a>"
        }

]