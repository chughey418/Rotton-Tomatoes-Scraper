# Rotten Tomatoes Scraper 

### About This Project:
I originally created this project for an assignment (aka challenge) in my Web Development II class in November of 2021. The instructions for this challenge included the following as the main goal:
> "Design and develop a web scraper that will crawl and scrape data from a website, that will allow such actions, while crawling and scraping multiple pages from that site."
> 
We had one week to complete this project, so I priortized functionality over aesthetic. However, after completing the class, I returned to the project to add some additional styling - creating a much more interesting and unique application. To do this, I created my own tomato image in Figma and used this for the background. I also used Bootstrap for the form and table formatting. Lastly, I incorporated an interesting font and added some other minor styling details.

### Link To Running Code:
https://www.clairehughey.me/past-projects/rotton-tomatoes-scraper  

### Implementation:
I decided to scrape Rotten Tomatoes Top 100 movie lists using scrapy. I built my front-end with Angular. The user selects a genre through a form. Once they submit, a php script is called which calls the python scrapy script. The user input is sent via command line to the scrapy project so that the correct url is scraped (each genre's movie list is located on a different page). The scraped information is stored in a Firebase Realtime Database. This information is displayed in the table located underneath the form and is updated whenever the database is updated. 

I decided to scrape Rotten Tomatoes (https://www.rottentomatoes.com) because I really like the site and often use it to check ratings of movies that I am interested in seeing.  


### How To Run Scraper:
To run my scrapy project, simply visit the URL (https://www.clairehughey.me/past-projects/rotton-tomatoes-scraper), select a genre in the select menu, and press the "Get Movies" button.   


### Challenges & Solutions:
I had a lot of trouble figuring out how to trigger my scrapy project with a button press in Angular. I decided to do this using a php script, but had a lot of issues arise. Eventually, I figured it out - mostly with the help of the youtube tutorial linked below. 

https://www.youtube.com/watch?v=33Jc59xW_dw  
