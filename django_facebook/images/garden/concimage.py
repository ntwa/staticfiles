from PIL import Image
from random import randint

class BotanicalGarden:
    def __init__(self,intermediary_id):
        self.intermediary_id=intermediary_id
        
    def plantFlowers(self,im1,im2):
    
        width, height =im1.size 
        width1,height1=im2.size
        
        #subimage=im0.crop((0,0,width,51))
        
        flower=200
        counter=0
        im2array=[]
       
        
        #prevent tree from the location of the house
        
        x1=randint(0,300)
        #while(x1>=(orighousec1) and x1<=(orighousec1+50)) or ((x1+50)>=(orighousec1) and (x1+50)<=(orighousec1+50)):
        #  x1=randint(0,250) 
        y1=randint(50,150)
        #while(y1>=(orighousec2) and y1<=(orighousec2+50)) or ((y1+50)>=(orighousec1) and (y1+50)<=(orighousec1+50)):
        #  y1=randint(50,100)
        
        x2=x1+1
        y2=y1+1
        
        x=x1
        y=y1
        
        c1=x1
        c2=y1
        d1=x2
        d2=y2
        row=0
        sentinal=30
        
        
        samplefg=im2.crop((0,0,1,1))#get a default white back ground that needs to be replaced with a portion from image backgr
        pix=samplefg.load()
        r,g,b=pix[0,0]
        space=0
        prevnum=-1
        flowers=["flower1.jpeg","flower2.jpeg","flower3.jpeg","flower4.jpeg","flower5.jpeg","flower6.jpeg","flower7.jpeg","flower8.jpeg"]
        while counter<flower:
            
            '''
            if (counter%5 )==0 and counter>0:
                row=row+1
                c1=x1
                c2=y1+(row*50)
                d1=x2
                d2=y2 +(row*50)
                print "Next row"
                
                space=0
                x=x1
                y=y1+(row*50) 
                print x,y
            '''
            #prevent trees from the house
            if(counter>=1):
                x1=randint(0,300)
              #while(x1>=(orighousec1) and x1<=(orighousec1+50)) or ((x1+50)>=(orighousec1) and (x1+50)<=(orighousec1+50)):
              #  x1=randint(0,250) 
                y1=randint(50,150)
              #while(y1>=(orighousec2) and y1<=(orighousec2+50)) or ((y1+50)>=(orighousec1) and (y1+50)<=(orighousec1+50)):
              #  y1=randint(50,100)
                
            
                x2=x1+1
                y2=y1+1 
            
            c1=x1
            c2=y1
            d1=x2
            d2=y2  
            
            x=x1
            y=y1    
            
            num=randint(0, 7)
            while(num==prevnum):
                num=randint(0, 7)    
            prevnum=num    
            
            c1=c1+space
            d1=d1+space
            box=(c1,c2,d1,d2)  # coordinate for each pixel box 
            im2x=0
            im2y=0 
            #im2mod=im2 # pick unaltered copy of the tree before we start to modify it
            #if(counter%2)==0:
            #    im2mod=Image.open("tree1.jpeg")
            #else:
            #    im2mod=Image.open("tree3.jpeg")
            im2mod=Image.open(flowers[num])
        
             
            while im2x<width1:#move one column
                while im2y<height1:#move through each row on the column
                    
                    box2=(im2x,im2y,(im2x+1),(im2y+1)) # for cropping the fore ground
                    croppedbg=im1.crop(box)
                    
                    croppedfg=im2mod.crop(box2)
                    pix2=croppedfg.load()
        
                    
                    
                        
                    r1,g1,b1=pix2[0,0]
                    
                    diff1=r-r1
                    diff2=g-g1
                    diff3=b-b1
                    
                    if(diff1<0):
                        diff1=diff1*(-1)
                    if(diff2<0):
                        diff2=diff2*(-1)
                    if(diff1<0):
                        diff1=diff1*(-1)    
                    if(diff1<0):
                        diff1=diff1*(-1)            
                    
                    
                
                    if((diff1<=20) and (diff2<=20) and (diff2<=20)):
                        #only replace white background on this image
                        im2mod.paste(croppedbg,(im2x,im2y))
                        pass
                        #replaced=croppedbg.load()
                    
                    
                        
                    d2=d2+1
                    c2=c2+1
                    im2y=im2y+1
                    box=(c1,c2,d1,d2)  # coordinate for each pixel box on the background image
                im2y=0
                #c2=49
                c2=y1+(row*50)
                
                      
                #d2=0# start to row 0 in the next iteration
                c1=d1
                
                
                d1=c1+1
                
                
                d2=c2+1
                
                space=5
         
                im2x=im2x+1 #for each foreground in the xaxis
            
            im2x=0# for each foreground
            im3mod=im2mod.crop((0,1,30,30))
            im1.paste(im3mod,(x,y))
        
            
            counter=counter+1
            im2mod=None
            return im1  
          
          
    
        
      
    
    
    
    def plantTrees(self,im1,im2):
    
        width, height =im1.size 
        width1,height1=im2.size
        
        #subimage=im0.crop((0,0,width,51))
        
        tree=20
        counter=0
        im2array=[]
        house=Image.open("house.jpeg")
        housex=width/2
        housey=(height/2)+25
        
        
        
        
        housec1=housex
        housec2=housey
        housed1=housec1+1
        housed2=housec2+1
        
        
        orighousec1=housec1
        orighousec2=housec2
        orighoused1=housed1
        orighoused2=housed2
        
        #prevent tree from the location of the house
        
        x1=randint(2,298)
        while(x1>=(orighousec1) and x1<=(orighousec1+50)) or ((x1+50)>=(orighousec1) and (x1+50)<=(orighousec1+50)):
            x1=randint(0,298) 
        y1=randint(50,148)
        while(y1>=(orighousec2) and y1<=(orighousec2+50)) or ((y1+50)>=(orighousec1) and (y1+50)<=(orighousec1+50)):
            y1=randint(50,148)
        
        x2=x1+1
        y2=y1+1
        
        x=x1
        y=y1
        
        c1=x1
        c2=y1
        d1=x2
        d2=y2
        row=0
        sentinal=50
        num=0
        
        samplefg=im2.crop((0,0,1,1))#get a default white back ground that needs to be replaced with a portion from image backgr
        pix=samplefg.load()
        r,g,b=pix[0,0]
        space=0
        prevnum=-1
        trees=["tree0.jpeg","tree1.jpeg","tree2.jpeg","tree3.jpeg","tree4.jpeg","tree5.jpeg","tree6.jpeg","tree7.jpeg","tree8.jpeg","tree9.jpeg","tree10.jpeg"]
        while counter<100:
            
            '''
            if (counter%5 )==0 and counter>0:
                row=row+1
                c1=x1
                c2=y1+(row*50)
                d1=x2
                d2=y2 +(row*50)
                print "Next row"
                
                space=0
                x=x1
                y=y1+(row*50) 
                print x,y
            '''
            #prevent trees from the house
            if(counter>=1):
                
                
              
                #prevent tree from the location of the house
                
                x1=randint(2,298)
                while(x1>=(orighousec1) and x1<=(orighousec1+50)) or ((x1+50)>=(orighousec1) and (x1+50)<=(orighousec1+50)):
                    x1=randint(0,298) 
                y1=randint(50,148)
                while(y1>=(orighousec2) and y1<=(orighousec2+50)) or ((y1+50)>=(orighousec1) and (y1+50)<=(orighousec1+50)):
                    y1=randint(50,148)
                
            
                x2=x1+1
                y2=y1+1 
            
            c1=x1
            c2=y1
            d1=x2
            d2=y2  
            
            x=x1
            y=y1    
            
            #num=randint(0, 10)
            #while(num==prevnum):
            #    num=randint(0, 10)
                
            prevnum=num    
            
            c1=c1+space
            d1=d1+space
            box=(c1,c2,d1,d2)  # coordinate for each pixel box 
            im2x=0
            im2y=0 
            #im2mod=im2 # pick unaltered copy of the tree before we start to modify it
            #if(counter%2)==0:
            #    im2mod=Image.open("tree1.jpeg")
            #else:
            #    im2mod=Image.open("tree3.jpeg")
            im2mod=Image.open(trees[num])
            num=num+1
            if(num==10):
                num=0
             
            while im2x<width1:#move one column
                while im2y<height1:#move through each row on the column
                    
                    box2=(im2x,im2y,(im2x+1),(im2y+1)) # for cropping the fore ground
                    croppedbg=im1.crop(box)
                    
                    croppedfg=im2mod.crop(box2)
                    pix2=croppedfg.load()
        
                    
                    
                        
                    r1,g1,b1=pix2[0,0]
                    
                    diff1=r-r1
                    diff2=g-g1
                    diff3=b-b1
                    
                    if(diff1<0):
                        diff1=diff1*(-1)
                    if(diff2<0):
                        diff2=diff2*(-1)
                    if(diff1<0):
                        diff1=diff1*(-1)    
                    if(diff1<0):
                        diff1=diff1*(-1)            
                    
                    
                
                    if((diff1<=20) and (diff2<=20) and (diff2<=20)):
                        #only replace white background on this image
                        im2mod.paste(croppedbg,(im2x,im2y))
                        pass
                        #replaced=croppedbg.load()
                    
                    
                        
                    d2=d2+1
                    c2=c2+1
                    im2y=im2y+1
                    box=(c1,c2,d1,d2)  # coordinate for each pixel box on the background image
                im2y=0
                #c2=49
                c2=y1+(row*50)
                
                      
                #d2=0# start to row 0 in the next iteration
                c1=d1
                
                
                d1=c1+1
                
                
                d2=c2+1
                
                space=5
         
                im2x=im2x+1 #for each foreground in the xaxis
            
            im2x=0# for each foreground
            im3mod=im2mod.crop((0,1,50,50))
            #im1.paste(im2mod,(x,y))
            im1.paste(im3mod,(x,y))
            #x=x+50
            #if counter==0:
            #im1.paste(house,(orighousec1,orighousec2))
            
            counter=counter+1
            im2mod=None
          
          
          
        #im1.paste(house,(orighousec1,orighousec2))
        #subimage3=im1.crop((0,0,width,300))
        #im0.paste(subimage3,(0,0))  
        
        
        
         #now build a house
        im2x=0
        im2y=0
        c1=orighousec1
        c2=orighousec2
        d1=c1+1
        d2=c2+1
        box=(c1,c2,d1,d2)
        while im2x<width1:#move one column
          while im2y<height1:#move through each row on the column
                 
            box2=(im2x,im2y,(im2x+1),(im2y+1)) # for cropping the fore ground
            croppedbg=im1.crop(box)
            
            croppedhousebg=house.crop(box2)
            pix2=croppedhousebg.load()
        
            
               
                
            r1,g1,b1=pix2[0,0]
            
            diff1=r-r1
            diff2=g-g1
            diff3=b-b1
            
            if(diff1<0):
                diff1=diff1*(-1)
            if(diff2<0):
                diff2=diff2*(-1)
            if(diff1<0):
                diff1=diff1*(-1)    
            if(diff1<0):
                diff1=diff1*(-1)            
            
            
        
            if((diff1<=20) and (diff2<=20) and (diff2<=20)):
                #only replace white background on this image
                house.paste(croppedbg,(im2x,im2y))
                pass
                #replaced=croppedbg.load()
            
                
            d2=d2+1
            c2=c2+1
            im2y=im2y+1
            box=(c1,c2,d1,d2)  # coordinate for each pixel box on the background image
          im2y=0
          c2=orighousec2
        
          
                
          #d2=0# start to row 0 in the next iteration
          c1=d1
          
          d1=c1+1
          
          d2=c2+1
          
          im2x=im2x+1 #for each foreground in the xaxis
         
           
        #subimage2=im1.crop((0,51,width,100))
        #subimage3=im1.crop((0,102,width,151))
        #im0.paste(subimage2,(0,50))
        im1.paste(house,(orighousec1,orighousec2))
        #im1.save('myfile5.png')
        return im1
        #im0=Image.open('myfile5.png')
        
        #im0.paste(house,(orighousec1,orighousec2))
        
        #im0.save('myfile6.png')
        #im1.paste(subimage,(0,0))    
        #im1.save('myfile5.png')
        
        #Image.alpha_composite(im1, im2).save("test3.png")
    
    
#im0=Image.open("land2.jpeg")
        
im1=Image.open("desert2.jpeg")
im2=Image.open("tree1.jpeg")
im3=Image.open("flower1.jpeg")

obj=BotanicalGarden('katulentwa@gmail.com')
garden=obj.plantFlowers(im1,im3)
completegarden=obj.plantTrees(garden,im2)
completegarden.save('myfile5.png')
#plantFlowers(im1,im3)
#plantTrees(im1,im2)

#im1.save('myfile5.png')
