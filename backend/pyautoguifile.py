import pyautogui as pgi

import time

def automate_click(received_data):
	for point_data in received_data:
		point_name, coordinates = point_data.popitem()
		x, y = coordinates
		if point_name == "PointA":
			pgi.moveTo(x,y)
			time.sleep(3)
			# time.sleep(2)
			pgi.click()
			time.sleep(1)
			pgi.hotkey('command', 'a')
			pgi.press('delete')
			time.sleep(1)
			pgi.typewrite("youtube.com", interval=0.2)
			time.sleep(1)
			pgi.press('enter')
		if point_name == "PointB":
			pgi.moveTo(x, y)
			time.sleep(5)
			pgi.click()	
			pgi.typewrite("you are beautiful", interval=0.1)
			pgi.press('enter')
		if point_name == "PointC":
			pgi.moveTo(x, y)
			time.sleep(3)
			pgi.click()	
		# if point_name == "PointD":
		# 	pgi.moveTo(x, y)
		# 	time.sleep(3)
		# 	pgi.click()	
		# 	pgi.typewrite("password", interval=0.1)
		# 	pgi.press('enter')
		if point_name == "PointD":
			time.sleep(1)
			pgi.moveTo(x, y)
			time.sleep(1)
			pgi.click();
