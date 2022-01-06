import os

newPage(1920,1080)
fill(None)
stroke(1)
offsetx, offsety = width()*.1, height()*.1
reps = 200
for i in range(reps):
    line(
        ( randint(-offsetx,width()*1.1), randint(-offsety,height()*1.1) ),
        ( randint(-offsetx,width()*1.1), randint(-offsety,height()*1.1) )
    )
    
desktop = f'{os.path.expanduser("~")}/Desktop'
saveImage(f'{desktop}/lines.pdf')