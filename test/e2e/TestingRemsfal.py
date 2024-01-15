from datetime import time
import pytest
from selenium import webdriver
import time
from selenium.common import TimeoutException
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class TestRemsfal:
    def setup_method(self):
        options = Options()
        options.add_argument("--headless=new")
        self.driver = webdriver.Chrome(options=options)

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
        wait = WebDriverWait(self.driver, 3)
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
        wait = WebDriverWait(self.driver, 3)
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

    def test_get_started_page(self):
        self.go_to_website()

        # Wait and click the 'Dokumentation' dropdown button to reveal menu items
        wait = WebDriverWait(self.driver, 3)
        dokumentation_dropdown = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//span[contains(text(), 'Dokumentation')]"))
        )
        dokumentation_dropdown.click()

        # Wait and click the item
        get_started_button = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//span[contains(text(), 'Get Started')]"))
        )
        get_started_button.click()

        try:
            # Now wait for the URL to change
            wait.until(EC.url_contains("get-started"))
        except TimeoutException:
            # If TimeoutException is caught, assert will check the URL
            pass

        # Verify the URL
        assert "get-started" in self.driver.current_url, "URL did not change to expected '/get-started'"

    def test_faq_page(self):
        self.go_to_website()

        # Wait and click the 'Dokumentation' dropdown button to reveal menu items
        wait = WebDriverWait(self.driver, 3)
        dokumentation_dropdown = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//span[contains(text(), 'Dokumentation')]"))
        )
        dokumentation_dropdown.click()

        # Wait and click the item
        faq_link = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//a[@href='/faq']/span[contains(text(), 'FAQ')]"))
        )
        faq_link.click()

        try:
            # Now wait for the URL to change
            wait.until(EC.url_contains("faq"))
        except TimeoutException:
            # If TimeoutException is caught, assert will check the URL
            pass

        # Verify the URL
        assert "faq" in self.driver.current_url, "URL did not change to expected '/faq'"

    def test_support_page(self):
        self.go_to_website()

        # Wait and click the 'Dokumentation' dropdown button to reveal menu items
        wait = WebDriverWait(self.driver, 3)
        dokumentation_dropdown = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//span[@class='p-menuitem-text' and text()='Community']"))
        )
        dokumentation_dropdown.click()

        # Wait and click the item
        support = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//a[@href='/support']/span[contains(text(), 'Support')]"))
        )
        support.click()

        try:
            # Now wait for the URL to change
            wait.until(EC.url_contains("support"))
        except TimeoutException:
            # If TimeoutException is caught, assert will check the URL
            pass

        # Verify the URL
        assert "support" in self.driver.current_url, "URL did not change to expected '/support'"

    def test_roadmap_page(self):
        self.go_to_website()

        # Wait and click the 'Community' dropdown button to reveal menu items
        wait = WebDriverWait(self.driver, 3)
        community_dropdown = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//span[@class='p-menuitem-text' and text()='Community']"))
        )
        community_dropdown.click()

        # Wait and click the item
        roadmap = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//span[@class='p-menuitem-text' and text()='Roadmap']"))
        )
        roadmap.click()

        try:
            # Now wait for the URL to change
            wait.until(EC.url_contains("roadmap"))
        except TimeoutException:
            # If TimeoutException is caught, assert will check the URL
            pass

        # Verify the URL
        assert "roadmap" in self.driver.current_url, "URL did not change to expected '/roadmap'"

    def test_github_link(self):
        self.go_to_website()

        # Wait and click the 'Community' dropdown button to reveal menu items
        wait = WebDriverWait(self.driver, 3)
        community_dropdown = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//span[@class='p-menuitem-text' and text()='Community']" ))
        )
        community_dropdown.click()

        # Wait and click the item
        github_link = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//a[@href='https://github.com/remsfal']/span[contains(text(), 'Github')]"))
        )
        github_link.click()

        try:
            # Now wait for the URL to change
            wait.until(EC.url_contains("github.com/remsfal"))
        except TimeoutException:
            # If TimeoutException is caught, assert will check the URL
            pass

        # Verify the URL
        assert "github.com/remsfal" in self.driver.current_url, "URL did not change to expected '/github.com/remsfal'"



    def test_responsive_layout(self):
        self.go_to_website()

        # Define different screen sizes for testing
        screen_sizes = {
            "Large Desktop": (1920, 1080),
            "Small Desktop": (1366, 768),
            "Tablet": (768, 1024),
            "Mobile": (375, 667),
        }

        for device, size in screen_sizes.items():
            width, height = size
            self.driver.set_window_size(width, height)
            print(f"Testing {device} layout")
            time.sleep(2)  # Wait for the layout to adjust


if __name__ == "__main__":
    pytest.main([__file__])
