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
        options.headless = True
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

    def test_responsive_layout_with_js(self):
                self.go_to_website()

                # Define different screen sizes for testing
                screen_sizes = {
                    "Large Desktop": (1920, 1080),
                    "Small Desktop": (1366, 768),
                    "Tablet": (768, 1024),
                    "Mobile": (375, 667),
                }

                for device, (width, height) in screen_sizes.items():
                    self.driver.set_window_size(width, height)
                    time.sleep(2)  # Allow time for layout changes

                    # Example JavaScript to check some responsive behavior
                    # This could be checking if an element is visible, or a certain CSS class is applied, etc.
                    is_mobile_menu_visible = self.driver.execute_script(
                        "return window.innerWidth <= 768 && document.querySelector('.mobile-menu').offsetWidth > 0;"
                    )

                    # You can add assertions based on the JavaScript execution result
                    if device == "Mobile" or device == "Tablet":
                        assert is_mobile_menu_visible, f"Mobile menu should be visible on {device}"
                    else:
                        assert not is_mobile_menu_visible, f"Mobile menu should not be visible on {device}"



if __name__ == "__main__":
    pytest.main([__file__])