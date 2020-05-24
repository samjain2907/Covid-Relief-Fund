# Covid19-Relief-Fund
A Crowd Funding Donation webstie for users to donate to NGOs working to help those in need during this coronavirus pandemic and a Digital platform for NGOs to register and recieve funds from people.

Made entirely on Django,React.js,Scrapy Framework and GeoPandas.

## How it Works

1. Click on the Organisation List tab and Click the Donate Now button to Donate.

2. For NGOs, click on Register Tab and Fill the details.

3. For Live Covid-19 cloropleth India Map click on Map tab.

## How to Use

### Initialize the project(Backend)

##### Create and activate a virtualenv:

1. `cd server`
2. `virtualenv venv`. This will a create a vitual environment called "venv" that helps with controlling dependencies.
3. `source venv/bin/activate`. 


##### Install dependencies:

(while in the activated virtual environment)
```bash
pip install -r requirements.txt
```
NOTE: After installing dependencies, pip-tools is also installed. You can now use it to manage package dependencies of your project.

##### Migrate, Create a Superuser, and Run the Server:
```bash
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```
 NOTE: Make sure the server is running on port 8000 if not then close all the applications running on port 8000 and Run the Server again.
 
##### For Updating Scraped Data:
```bash
python manage.py crawl
```
### Initialise the Project(Frontend);

##### Install the Dependencies:
```bash
npm Install
```

##### Start the Server:
```bash
npm start
```
 NOTE: Make sure the server is running on port 3000 if not then close all the applications running on port 3000 and Run the Server again.
