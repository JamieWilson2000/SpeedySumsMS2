# <u>Milestone Project 2: Speedy Sums</u>

![site screenshot]()
 

## [Link to live site]()

# Contents

## - [User Story](#user-story)
## - [The 5 planes of UX](#the-5-planes-of-ux)
## - [Early Stages](#early-stages)
## - [The Website Features](#the-website-features)
## - [User Interaction](#user-interaction)
## - [The Coding Languages and Techniques Used](#the-coding-languages-and-techniques-used)
## - [Method of Deployment](#method-of-deployment)
## - [Methods of Testing](#methods-of-testing)
## - [Credits](#credits)

<br>

# User Story

- Speedy Sums was inspired by the Code Institute walkthrough project "Love Maths". Whilst working on the walkthrough I thought it would be fun and educational to have a game that had a learning aspect along with the feeling of being under pressure making the whole thing a little more exciting.
- Whereas the walkthrough offers the choice of which type of sum you're faced with, i.e addition, subtraction etc, I thought it would be more fun and challenging to not know what variety of sum you're going to be faced with. Add to that, with a 10 second timer counting down the pressure should unevitably start mounting.
- I wanted this game to appeal to all ages. Young children can enjoy a challenge in the easy level, whilst adults can test their maths knowledge in the medium and hard levels. 

- Site objectives for new users
    - I want the user to have a clear understanding of the concept from the start. The opening screen has but one option and thats to open the game. The following page has a simple instruction paragraph informing the user that the goal is to simply answer the given sum within the 10 second window. The user then has to select one of three options, Easy, Medium, or Hard to enter into the actual gamepage.

- Site objectives for returning users
    - The incentive for returning users would be to better their high scores or to try another, harder level. This could be used as an incentive scheme for younger children to improve their high scores to recieve physical rewards from their parents/ teachers.

- User Conclusion
    - The user should feel that after playing the game, first and foremost , that they had fun. I wanted the site to be bright, vibrant and fun looking. Appealing to young and old.
    - The user should also feel that this has been a stimulating experience, without the timer the game would be too easy all round but with the introduction of the timer, there is always an element of pressure behind every sum.
    - The user should feel a want to return to the game simply to spend 5 - 10 minutes playing it as a brain training exercise, to improve their high score, and / or to encourage their young ones to practise their mathematics in a fun, safe environment.



# The 5 planes of UX

- When planning out this game I thought it important to implement the same 5 planes of UX that I had used when designing my Milestone Project 1. Doing this makes the process an easier task.

- ## <u>The strategy</u>
    The strategy for this game was to create an exciting, fun, vibrant environment where users young and old can practise their mathematical problem solving skills. Reports show that if a mundane task is incorporated into a game environment then children are more likely to tackle these mundane tasks. It was with this in mind that I thought of creating a game with young children in mind that could see them solving mathematical problems with a high score record that they could show off, brag about, and aim to better along the line. Whilst considering the concept I felt that there would be adults that would enjoy the challenge too so that spurred on then the option to have an easy, medium, and hard level with obviously increasing difficulty levels. I dwelled on using fun elements to label these levels , ie animals or faces etc, but I felt that could put some users off so I decided to stick with plain and simple Easy, Medium and Hard as level titles.

- ## <u>The Scope</u>
    The overall site is to be a very simplistic, colorful and striking environment. Big bold letters in a lighthearted font that will prove easy to read, and to instill a sense of fun from the start. To differentiate between levels I decided on bold colors in the background so there should be no mistaking which level the user has opted for.
    

- ## <u>The Structure</u>
    As with my Milestone Project 1,  I have learnt my limitations over the course of this project so I planned for this site to be very simple. As mentioned previously I wanted a site that would be accessible to young and old, therefore, I felt that the best user interface would be one of simplicity. Basically the structure would only consist of three real elements, the landing page (which is simply a one off greeting page), an "entry" page which is where the purpose of the game is explained and presented to the user are the three main options for level difficulty. In this way, I felt that the game could be handed to a child, unsupervised and they would have no difficulty getting a game up and running.

- ## <u>The Skeleton</u>
    The 'bones' of the game was sketched out in Balsamiq, as mentioned, I was wanting to keep the look and feel of the game very simplistic so as to not become too overwhelming. Strong, big, bold fonts accompanying strong primary colors based on a traffic light system with a primary green being the easy level, an amber/orange color representing the medium level and finally the red to distinguish the hardest of the levels. The landing page and the "entry" page would have a blended gradient background consisting of the three main colors for continuity.

- ## <u>The Surface</u>
    It is of course at this stage when my actual level of understanding of coding comes into play. I felt very comfortable with designing the look of the game and getting all the elements to position correctly within the game area. The Javascript side I opted for a simple approach, keeping functions to a minimum where possible, and by distinguishing each levels javascript code into it's on .js file. Upon researching this approach, it seemed an acceptable, clean way of operating so I was happy to continue in this fashion.
   
    ---
# Early Stages

## Wireframes

![wireframe collection]()

- Above is a summary of the wireframes for this site (The desktop view). The basis of the site is very simple. One main landing page, one structure for the page that will contain the recipes (content will change but the structure remains the same), and one contact form page. Below are the links to the full images and their respective mobile views.

- [Link to landing page desktop view]()
- [Link to landing page tablet view]()
- [Link to landing page mobile view]()
- [Link to recipe page desktop view]()
- [Link to recipe page tablet view]()
- [Link to recipe page mobile view]()
- [Link to contect form page desktop view]()
- [Link to contact form page tablet view]()
- [Link to contact form page mobile view]()

![Wireframe_showing_desktop_to_mobile_view]()



## Colour Schemes

<img src="assets/images/main_color_scheme.png" alt="colorscheme" width="500" height="197">
<img src="assets/images/button_hover_colors.png" alt="hovercolorscheme" width="480" height="197">

The colors I have chosen are based around a very plain and simple primary colorscheme. The main theme is that of a traffic light system with green being the easy level, orange(amber) representing the medium level, and red to indicate the hard level.<br>
I chose a darker variant for the hover variants to indicate the button about to be selected.<br>
To ensure the text is easily readable throughout the game I ran the colors through the coolers.co color contrast checker and was happy with the results as shown below. Admittedly, I would have prefered a higher score on the hard level and I played around with different variants of the text color but I felt the change in text color felt unusual and somewhat out of place so I thought that with the chosen colors being pleasing to my eyes that I would stick with the continuity of the selected color.<br>

<img src="assets/images/Contrastcheck1.png" alt="contrastcheck1" width="250" height="180">
<img src="assets/images/Contrastcheck2.png" alt="contrastcheck2" width="250" height="180">
<img src="assets/images/Contrastcheck3.png" alt="contrastcheck3" width="250" height="180">
<br>

- I adopted these colors in the following styles:
    - I used a gradient effect using the three main sourced colors #44F544, #FFA500, and #FF0000 on the greeting page and the landing page and on the in game buttons.
    - I used the color #44F544 green on the easy level button and for the background color of the easy level.
    - I used #3BD43B as a variant of #44F544 to indicate the hover effect on the easy level button .
    - I used the color #FFA500 orange on the medium button and for the background color of the medium level.
    - I used #D18800 as a variant of #FFA500 to indicate the hover effect on the medium level button .
    - I used the color #FF0000 red on the hard button and for the background color of the hard level.
    - I used #CF0000 as a variant of #FF0000 to indicate the hover effect on the hard level button .
    - I used #FFFF00 yellow as the button color in the game over box.
    - I used #000000 black as the main and only color of text throughout the game.



## Fonts

- For the textual elements I imported in two font family variants from Google Fonts.

    ![Main Font](assets/images/fontimage.png)<br>
    - Londrina Solid regular is used throughout as the brand text.
    - I opted to stick to the one font-family being Londrina but in finer pieces of text I used a lower font-weight of 300.

    


# The Website Features

- ## <u>As Submitted</u>
   

- ## <u>Features I would include in the future</u>
    

# User Interaction

- The following elements are selectable:
    -   The Landing Page:
       
    
    - The Mobile Landing Page:
        

    - The Recipe Pages:
       

    - The Contact Form:
       

# The Coding Languages and Techniques Used

- This site was constructed using:
    - HTML5
    - CSS3
    - Bootstrap 4.2.1
    - Fontawesome
   



# Method of Deployment

- To fully test the site on multiple 'real-world' devices I needed to create a live link to the site that could be accessed universally. To do this, a simple procedure is required. 

    - Step 1: Open Github.com and sign in.
    - Step 2: Once signed in you should see your repositorys in chronological order.
    - Step 3: Select the repository you wish to create a link for and once selected click the settings tab on the page.
    - Step 4: Within the settings page you will be given the option to rename the repository, add an image to customize your social media preview, and many other options to be explored at a later date.
    - Step 5: Scroll down and you will find the heading for GitHub Pages.
    - Step 6: At this stage the 'source' field should read 'none' so click on the button and select 'master'
    - Step 7: Once this is selected, hit save and the page should refresh bringing you back to the top.
    - Step 8: Scroll back down to the Github pages section and you will now see a message informing the user that the site is ready to be published and a highlighted link. Make a note of the link address for future reference or click the link to access the site direct. 

- From this point on you can type in and access your site on any device with an internet browser which is ideal for testing purposes.

## For those wishing to develop the site further using a repository clone:
- You must first ensure that you have a current Github account.
- Be running the most up to date version of Google Chrome with the Gitpod browser extension installed.
- Login to Github with your own github account.
- Navigate to the Project Github Repository page.
- Click the New button, this will trigger a new workspace.
- Under Create a new Repository select Import a Repository
- Now, in the Your Old Repository Clone URL field, type in ""
- Enter in a new relevant repository name and click Begin Import.
- After a short while you'll recieve a message saying that the new repository is ready with a link to take you to it.
- From here on, open gipod and continue future developments.  

# Methods of Testing

- Throughout the development stage I used a handful of methods to ensure the site looked and acted appropriately.<br> These included:

    - Chrome Dev Tools - for testing stylings, sizing, and responsiveness

    - Mozilla Dev Tools - for testing stylings, sizing, and responsiveness

    - http://ami.responsivedesign.is/ - again for testing stylings, sizing, and responsiveness.

    - https://coolors.co/ - for picking color schemes and testing contrast colors

    - Github Pages - to access the live site across different devices

    - Google Lighthouse - to test perfomance 


## Summary of User Testing



    ## Problems and bugs experienced along the way

- Problem: Subtitle on easylevel.html stuck to left side of page
    - Fix: Adjusted styling width to 100%
- Problem: Trying to have timer and first question appear when start button is pressed.
    - Fix: Moved the timer code inside the function targeted by the onclick function.
- Problem: "Random sums are actually just repeating the sum question instead of generating a new sum.
    - Fix: 
- Problem: Getting this error message "script.js:160 Uncaught TypeError: Cannot set property 'textContent' of null
    at startGame (script.js:160)at HTMLButtonElement.onclick (mediumlevel.html:32)"
    - Solution:
- Problem: Game buttons on entry page had lost their styling elements.
    - Fix: Discovered I had made changes to the Id tag that was overriding the original stylings.
- Problem: Screen jumping when hovered over answer box
    - Fix:I discovered that the div that the answer box was located in had a wider value than the body of the page so I set the width to 100% and that fixed the issue
- Problem: Score not refreshing back to 0 when selecting the play again option from the end of game prompt.
    - Fix: I encased the "Play Again" button in an "<a></a>" with a href to "reload" the page.
- Problem: High Score won't accept the latest high score.
    - Fix: Even though I was passing the correct values to the local storage I hadn't been accessing the high score from the local storage for use within the if statements.
- Problem: The High Score function was not running in new instances of the game only in existing workspaces.
    - Fix: I started off the function with accessing the local storage and then running the conditions, before I was setting the conditions and then accessing the local storage.
- Problem: High Score not displaying in the event of the game finishing due to time running out.
    -Fix: I discovered using the google dev tools for application local storage that the value was being stored so I decided to add a line of code as part of the time running out statement that simply printed out the value stored in the local storage.
- Problem : Timer not refreshing when correct answer given.
    - Fix : I originally had the timer wrapped inside a function but I removed the "function" casing and in the checkAnswer function I reset the timeleft back to 10.

# Credits
- For instruction on how to create the title animation on the landing page I refered to here:
- Credit - https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+CSE101+2020_Q2/courseware/be0e510a3aca4bccb6e0bba4cf7cf06b/83c6c94d55f44c79a3646810d80ce7a3/

- For instruction on how to create a countdown timer I referred to here:
- Credit - https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown

- For reference on how to create a "Game Over" alert box I referred to here:
- Credit - https://www.tutorialspoint.com/How-I-can-change-the-style-of-alert-box-using-JavaScript#:~:text=You%20will%20not%20be%20able,library%2C%20jQuery%20to%20achive%20this.
- For instruction on how to set up a virtual keypad in the game I referenced:
- Credit - https://codepen.io/erkmen/pen/pyjxOY
- For reference on how to store High Scores within the game I referred to:
- Credit - https://www.w3schools.com/jsref/prop_win_localstorage.asp



## Throughout the creation of this project I have referred to the following for assistance and guidance:

- https://codeinstitute.net/
- https://www.w3schools.com
- https://stackoverflow.com/
- https://css-tricks.com/



# Acknowledgement

- I would like to thank Code Institute for the knowledge and the motivation shown to me up to this point. I would also like to thank my mentor Gurjot Singh for his advice in completing this project. As a  complete newbie to coding I am so proud that thanks to CI I have the ability to acheive this creation. I look forward to the rest of the course and a new future career.<br>



# - [Back to top](#contents)








