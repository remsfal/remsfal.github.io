from datetime import time
import pytest
from selenium import webdriver
import time
from selenium.common import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class TestRemsfal:
    def setup_method(self):
        self.driver = webdriver.Chrome()

    def teardown_method(self):
        self.driver.quit()

    def go_to_website(self):
        self.driver.get("https://remsfal.de/")

    def test_go_to_website(self):
        self.go_to_website()
        # Additional assertions or actions for this test

    def test_mission_page(self):
        self.go_to_website()

        # Wait and click the dropdown button
        wait = WebDriverWait(self.driver, 10)
        dropdown_button = wait.until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, ".p-submenu-icon.pi.pi-angle-down"))
        )
        dropdown_button.click()

        # Wait and click the 'Unsere Mission' item in the dropdown
        unsere_mission_item = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//span[contains(text(), 'Unsere Mission')]"))
        )
        unsere_mission_item.click()

        try:
            # Now wait for the URL to change
            wait.until(EC.url_contains("mission"))
        except TimeoutException:
            # If TimeoutException is caught, assert will check the URL
            pass
        # Verify the URL
        assert "mission" in self.driver.current_url, "URL did not change to expected '/mission'"

    def test_thesis_page(self):
        self.go_to_website()

        # Wait and click the dropdown button
        wait = WebDriverWait(self.driver, 10)
        dropdown_button = wait.until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, ".p-submenu-icon.pi.pi-angle-down"))
        )
        dropdown_button.click()

        # Wait and click the item
        abschlussarbeiten_item = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//span[contains(text(), 'Abschlussarbeiten')]"))
        )
        abschlussarbeiten_item.click()

        try:
            # Now wait for the URL to change
            wait.until(EC.url_contains("thesis"))
        except TimeoutException:
            # If TimeoutException is caught, assert will check the URL
            pass

        # Verify the URL
        assert "thesis" in self.driver.current_url, "URL did not change to expected '/thesis'"

if __name__ == "__main__":
    pytest.main([__file__])