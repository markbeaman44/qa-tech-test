# Excute Python Tests

## Execute Tests
- `make build` = `builds ecsd-tech-test, selenium hub/node and python environment`
- `make up` = `ups ecsd-tech-test, selenium hub/node and python environment`
- `make test` = `tests with docker-python environment using docker-selenium hub/node`
- `make down` = `teardowns all docker images`


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
