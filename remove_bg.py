from PIL import Image

def remove_background(img_path, out_path, tolerance=30):
    img = Image.open(img_path).convert("RGBA")
    data = img.getdata()
    
    # Assume top-left pixel is background
    bg_color = data[0]
    
    new_data = []
    for item in data:
        # Check if color is within tolerance
        diff = sum(abs(item[i] - bg_color[i]) for i in range(3))
        if diff < tolerance * 3:
            # Check edge cases or pure match, let's do a smooth alpha based on distance for anti-aliasing
            if diff < tolerance:
                new_data.append((255, 255, 255, 0))
            else:
                alpha = int(255 * (diff - tolerance) / (tolerance * 2))
                new_data.append((item[0], item[1], item[2], alpha))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(out_path, "PNG")

remove_background("src/assets/logo.jpeg", "src/assets/logo.png")
