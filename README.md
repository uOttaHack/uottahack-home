# BlossomHack Website

Welcome to the Github repository for the BlossomHack website!

![BlossomHack website. It looks preeeeety.](docs/blossomhack-page.png)

- [Creating New Section](#creating-new-section)
- [Creating New Page](#creating-new-page)
- [Adding Section to Navbar](#adding-section-to-navbar)
- [Page-Specific Layout](#page-specific-layout)
- [Libraries](#libraries)
- [Special Thanks](#special-thanks)

## Creating New Section

In this example, we will create a new section called "Demo" and demonstrate how it is done.

1. In src/components, create a new folder for your new section labeled "Demo".

   ```
   src/components/Demo
   ```

   ![Image of new folder called Demo](docs/section-1.png)

2. Create a file labeled "Demo.jsx" in the folder.

   - Optionally, create a file called "Demo.css" if you would like to style your Demo.jsx. Just make sure to put the following in the first few lines of the Demo.jsx file.

     ```
     import "./Demo.css"
     ```

   ![New Demo.jsx file being created](docs/section-2.png)

3. Include the following lines in Demo.jsx:

   ```
   export default function Demo() {
       return(
           <div className="Demo" id="Demo">
               Example Text Here. Can remove once you actually start section.
           </div>
       );
   }
   ```

   Create your section and fill it with whatever details you want there.

   Note: If you would like to render different sections depending on the page visited, look [here](#page-specific-layout-for-section) for details.

   ![Creating function Demo](docs/section-3.png)

4. After you are finished creating your section, go to src/components/Section/Section.jsx. In the import section up top, do the following:

   ```
   import Demo from "../Demo/Demo"
   ```

   ![Importing above code in Section.jsx](docs/section-4.png)

5. In the same file, go to each page that you would like your section to be rendered in (denoted by "location.pathname" at the beginning) and insert the following code in line with the rest of them:

   ```
   {sectionName === "This is my Demo" && <Demo />}
   ```

   ![Creating the Demo section in root page](docs/section-5.png)

6. Go to src/components/App. For each page that you put your section in, go to the respective .jsx file and insert the following in the sections variable:

   ```
   {
       sectionName: "This is my Demo",
       subtitle: "",
   },
   ```

   Note: The sectionName here MUST be the same as the sectionName in the previous step, else it will not render.

   ![Inserting code above to sections variable in App.jsx](docs/section-6.png)

### Results

![Showing off the new section in root page](docs/section-final.gif)

## Creating New Page

In this example, we will create a new page called "DemoApp" and demonstrate how to navigate to it within our website.

1. Go to src/components/App and create a new file named "DemoApp.jsx".

   ![New file called DemoApp.jsx in App folder](docs/page-1.png)

2. Paste the following code into your file:

   ```
   import "./App.css";
   import Navbar from "../Navbar/Navbar";
   import Front from "../Front/Front";
   import Page from "../Page/Page";
   import Footer from "../Footer/Footer";
   import { Outlet, ScrollRestoration } from "react-router";

   function DemoApp() {
     const sections = [
       {
         sectionName: "",
         subtitle: "",
       },
     ];

     return (
       <div className="App">
         <Navbar />
         <Front />
         <Page sections={sections} />
         <hr />
         <Footer />
         <div id="detail">
           <Outlet />
         </div>
         <ScrollRestoration />
       </div>
     );
   }
   export default DemoApp;
   ```

   ![Copy pasting above into DemoApp.jsx](docs/page-2.png)

3. In the sections array of the code, insert titles for each sections you want to display there as such:

   ```
   {
       sectionName: "I Want This Displayed",
       subtitle: "",
   },
   ```

   ![Adding new titles in sections array](docs/page-3.png)

4. Navigate to src/main.jsx and import the following above:

   ```
   import DemoApp from "./components/App/DemoApp";
   ```

   ![Importing DemoApp in main.jsx](docs/page-4.png)

5. Within the same file, go to the router variable where createHashRouter is used. Create a name for the page (in this case, "mydemopage") and insert the following object in accordance with the rest of the array items there:

   ```
   {
       path: "/mydemopage",
       element: <DemoApp />,
       errorElement: <Error />,
   },
   ```

   ![Adding new page called /mydemopage to route names](docs/page-5.png)

6. Go to src/components/Section/Section.jsx. Import any necessary sections you want to use for your page (if it is not already in the imports).

   ![Importing two sections to Section.jsx](docs/page-6.png)

7. In the same file and within the return statement, insert the following code, adding all the sectionName you have made along with the apropriate section for that name:

   ```
   {location.pathname === "/mydemopage" && (
       <div>
           <h2>{sectionName}</h2>
           <h3>{subtitle}</h3>
           {sectionName === "I Want This Displayed" && <Contact />}
           {sectionName === "This is my Demo" && <Demo/>}
       </div>
   )}
   ```

   ![Deciding which sections to display in new page](docs/page-7.png)

### Adding Way to Navigate to New Page

To navigate to your new page, follow the general guideline below.
We will do this in the navbar file for now, but you can put anywhere you feel is appropriate for it (Just make sure it looks nice!).

Note: You can look at Navbar.jsx for an example on navigating between the root and sponsorship pages.

1. In the file you want to put the link to the new page at, import the following:

   ```
   import { Link } from "react-router-dom";

   ```

   ![Showing off Link import in Navbar.jsx](docs/page-ex1.png)

2. Create an HTML with the following basics:

   ```
   <Link to="/mydemopage">Go to my demopage</Link>
   ```

   ![Creating a link to new page](docs/page-ex2.png)

### Results

![New file called DemoApp.jsx in App folder](docs/page-final.gif)

## Adding Section to Navbar

1. Go to the section that you want added to the navbar and copy the id (NOT className) of the upmost div element in the return section

   ```
   return (
       <div className="not this one" id="Demo">
           RANDOM STUFF HERE, IGNORE FOR THIS INSTRUCTION
       </div>
   )
   ```

   ![Copying id value from topmost div element in Demo .jsx](docs/navbar-1.png)

2. Go to src/components/Navbar/Navbar.jsx and scroll down to the return section of the code. For each page you have your section in and want to be displayed in the navbar (denoted by "location.pathname" at the beginning), write the following:

   ```
   <li onClick={() => scrollToSection("Demo")}>Go here to Demo</li>
   ```

   The scrollToSection string will contain the id of the section that you obtained previously. If you do not put the correct id, then it will fail to scroll down to the correct section, if at all.

   ![Creating new navbar link](docs/navbar-2.png)

### Results

![Showing off new navbar link in website](docs/navbar-final.gif)

## Page-Specific Layout for Section

1. In the section you would like to edit, import the following:

   ```
   import { useLocation } from "react-router-dom"
   ```

   ![Importing useLocaton in Demo section](docs/different-1.png)

2. Within your default function and before the return line type the following:

   ```
   const location = useLocation();
   ```

   ![Creating location variable](docs/different-2.png)

3. Within the return section of your code, surround each element you want to be displayed in a particular website with the following code:

   ```
   {location.pathname === "/INSERTPAGENAMEHERE" && (

       YOUR PAGE-SPECIFIC DETAILS HERE

   )}

   ```

   Note: If you plan on using the same section with different text for each page, you will need to surround each of those texts with the appropriate page. Take a look at other sections like FAQ.jsx and About.jsx for examples.

   ![Creating different texts for root and .mydemopage](docs/different-3.png)

### Results

![Two pages displaying different things in same section](docs/different-final.gif)

## Libraries

- **Vite** - Javascript build tool; Used to set up quick and easy development cycles

- **React-Router-Dom** - React navigation; Used for navigating between different pages on the website

- **ESLint** - Javascript static analyzer and linter; Run "npm run lint" in the command line to find problems and receive coding suggestions

- **Prettier** - Javascript formatter; Used to make formatting easier for users and to set a standard for this project

- **Leaflet and React-Leaflet** - Javascript map library; Used to display a map for users to identify location of hackathon

- **DOMPurify** - Javascript XSS sanitizer; Used to prevent XSS attacks on code when HTML code is rendered from json string in FAQ.jsx

- **Husky** - Javascript commit tool; Used to automate certain commands when developers commit code to Github (ex. running Prettier and auto-format code)

## Special Thanks

Thanks goes to MLH for helping us host our hackathon and providing us the opportunities to start our own student-led hackathon,

The developers behind uOttaHack for a great initial website to start ours from,

Our own developers Nat, Luke, and Justin for developing the initial website before the revamp,

And to challengers and hackers like you, thank you!

- https://mlh.io/
- https://github.com/uOttaHack/uottahack-home
- https://github.com/hi-names-nat
- https://github.com/llukehaskell
- https://github.com/Justin-Garey
