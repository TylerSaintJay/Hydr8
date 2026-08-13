from PIL import Image
import numpy as np

# Load the image
img = Image.open('public/assets/logo2.jpeg').convert("RGBA")
arr = np.array(img)

# Make white pixels transparent (assuming white is > 240, 240, 240)
r, g, b, a = arr[:,:,0], arr[:,:,1], arr[:,:,2], arr[:,:,3]
mask = (r > 230) & (g > 230) & (b > 230)
arr[mask, 3] = 0

img = Image.fromarray(arr)

# Crop to square
width, height = img.size
new_size = min(width, height)
left = (width - new_size)/2
top = (height - new_size)/2
right = (width + new_size)/2
bottom = (height + new_size)/2
img = img.crop((left, top, right, bottom))

# Save as png
img.save('public/favicon.png')
