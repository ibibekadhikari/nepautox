# CODE START
from pynput import mouse
import time
import pyautogui
from PIL import ImageGrab
import pytesseract
import re
# Initialize coordinates
x_cord = None
y_cord = None
listener = None
def on_click(x, y, button, pressed):
    global x_cord, y_cord
    if pressed:
        print(f"Mouse clicked at: {x}, {y}")
        x_cord = x
        y_cord = y
        listener.stop()
    

# Start listening for mouse clicks
def runtheapp():
    global listener
    listener = mouse.Listener(on_click=on_click)
    listener.start()
    listener.join()

    target_hour = 12
    target_minute = 55

    while True:
        # Wait for 5 seconds before each iteration


        # Capture the region of interest
        o_cord = int(x_cord)                   
        p_cord = int(y_cord)
        roi_width = 40
        roi_height = 40
        # Calculate ROI coordinates as integers
        roi_left = int(o_cord - roi_width // 2)
        roi_top = int(p_cord - roi_height // 2)
        roi_right = int(o_cord + roi_width // 2)
        roi_bottom = int(p_cord + roi_height // 2)
        return (o_cord, p_cord)

    # Capture the region of interest
        # screenshot = ImageGrab.grab(bbox=(roi_left, roi_top, roi_right, roi_bottom))


        # screenshot.save("screenshot.png")  # Optional: Save the screenshot for inspection

        # Use pytesseract to extract text from the screenshot
        # text = pytesseract.image_to_string(screenshot)

        # Use regex to extract only numbers
        # numbers = re.findall(r'\d+', text)
        # extracted_number = ''.join(numbers)

        # print(f"Extracted number: {extracted_number}")

        # Example condition: Trigger click if the extracted time matches the target time (10:45)
        # if extracted_number and len(extracted_number) == 4:
        #     current_hour = int(extracted_number[:2])
        #     current_minute = int(extracted_number[2:])
            
        #     if current_hour == target_hour and current_minute >= target_minute:
        #         # Move to the stored coordinates and click
        #         pyautogui.moveTo(x_cord, y_cord)
        #         pyautogui.click()
        #         print("Clicked at target time!")
        #         break