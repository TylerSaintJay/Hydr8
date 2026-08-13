from PIL import Image

# Load the image
img = Image.open('public/assets/logo2.jpeg').convert("RGBA")

# Make white pixels transparent
datas = img.getdata()
new_data = []
for item in datas:
    # change all white (also shades of whites)
    # to transparent
    if item[0] > 230 and item[1] > 230 and item[2] > 230:
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append(item)

img.putdata(new_data)

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
