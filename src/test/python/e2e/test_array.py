import time
import unittest
import warnings

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from src.test.python.pages import other as others


class TestECS(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Remote(
            command_executor='http://selenium-hub:4444/wd/hub',
            desired_capabilities={'browserName': 'chrome'}
        )
        self.driver.get("http://ecs:3000")

        WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.ID, "home"))
        )


    def test_array_ecs(self):
        my_name = 'Mark Beaman'
        # Clicks on Challenge button
        render_button = self.driver.find_element(
            By.XPATH, '//button[@data-test-id="render-challenge"]'
        )
        render_button.click()

        row = 1
        while row <= 3:
            # Goes through each table row and stores into a list
            num_list = others.store_table_row_in_list(self, row_num=row, total_column=9)
            # Calculates the sum value from list
            sum = others.calc_array(num_list)

            # Adds value into correct submit textfield
            self.driver.find_element(
                By.XPATH, 
                f'//input[@data-test-id="submit-{row}"]'
            ).send_keys(sum)

            row += 1
        # Adds 'my_name' into Your Name textfeild
        self.driver.find_element(
            By.XPATH, '//input[@data-test-id="submit-4"]'
        ).send_keys(my_name)
        # Submits results
        submit_button = self.driver.find_element(
            By.XPATH, '//button[@data-test-id="submit"]'
        )
        submit_button.click()


    def tearDown(self):
        self.driver.quit()


if __name__ == '__main__': 
    unittest.main(warnings='ignore')
