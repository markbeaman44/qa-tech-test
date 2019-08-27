# Excute Python Tests

## Execute Commands
- `make build` = `builds ecsd-tech-test, selenium hub/node and python environment`
- `make up` = `ups ecsd-tech-test, selenium hub/node and python environment`
- `make test` = `tests with docker-python environment using docker-selenium hub/node`
- `make down` = `teardowns all docker images`
- `make ecs` = `ups ecsd-tech-test`
- `npm run cypress:run` = `tests against cypress (headless)`
- `npx cypress open` = `opens cypress hub, to manually execute tests`

## Execute Python tests via docker
- `make build`
- `make up`
- `make test`

## Execute Python BDD api tests via docker
- coming soon

## Execute Cypress tests
- `npm install`
- `make ecs`
- `npx cypress open` - for UI hub version
- `npm run cypress:run` - for headless version

## Execute nightwatch tests
- coming soon

## Execute java tests via docker
- coming soon

## Execute appium tests
- coming soon



# If you want to install locally:

## Setup Python locally
You need to install the following to run the test:
Open a Terminal and enter:
- Install python3.7
- sudo easy_install pip
- Pip3.7 install selenium

OR

If Python installed already then requirement.txt can be used to install packages:
- pip3 install -r requirement.txt


## Install Chromedriver
If already installed and at SYSTEM PATH - go straight to Execute Tests

Chrome needs to be installed locally:
Goto URL: http://chromedriver.storage.googleapis.com/index.html

Goto URL, to add chromedriver as SYSTEM PATH:
url - https://www.kenst.com/2015/03/including-the-chromedriver-location-in-macos-system-path/

OR

Add the `executable_path="{CHROMEDRIVER_DIRECTORY}"` to `self.driver = webdriver.Chrome()`
