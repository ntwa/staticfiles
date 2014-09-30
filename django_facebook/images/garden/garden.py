import PIL
from PIL import Image
from random import randint

class BotanicalGarden:
    def __init__(self,intermediary_id):
        self.intermediary_id=intermediary_id
        
    def plantFlowers(self):
        
        im1=Image.open("desert2.jpeg")
        freshim1=Image.open("desert2.jpeg")
        im2=Image.open("flower1.jpeg")        
        width, height =im1.size 
        width1,height1=im2.size
        width1=(width1/2)+1
        height1=(height1/2)+1
        #subimage=im0.crop((0,0,width,51))
        
        flower=120
        counter=0
        im2array=[]
       
        
        #prevent tree from the location of the house
        
        #x1=randint(0,300)
        x1=0
        #while(x1>=(orighousec1) and x1<=(orighousec1+50)) or ((x1+50)>=(orighousec1) and (x1+50)<=(orighousec1+50)):
        #  x1=randint(0,250) 
        #y1=randint(60,150)
        y1=60
        #while(y1>=(orighousec2) and y1<=(orighousec2+50)) or ((y1+50)>=(orighousec1) and (y1+50)<=(orighousec1+50)):
        #  y1=randint(50,100)
        
        

        row=0
        sentinal=30
        
        
        samplefg=im2.crop((0,0,1,1))#get a default white back ground that needs to be replaced with a portion from image backgr
        pix=samplefg.load()
        r,g,b=pix[0,0]
        space=0
        row=0
        prevnum=-1
        flowers=["flower1.jpeg","flower2.jpeg","flower3.jpeg","flower4.jpeg","flower5.jpeg","flower6.jpeg","flower7.jpeg","flower8.jpeg"]
        original_line_start=(x1,y1,width,y1+1)   
        original_x=x1
        original_y=y1
        column=0
        while counter<flower:
          
            
            if (counter%20)==0 and counter>0:
                column=0
                row=row+1
            
            c1=x1+(column*15)
            c2=y1+(row*15)
            d1=c1+1
            d2=c2+1 
            x=c1
            y=c2
                
 
                
 

 
                
            
  
            
            num=randint(0, 7)
            while(num==prevnum):
                num=randint(0, 7)    
            prevnum=num    
            
            
            box=(c1,c2,d1,d2)  # coordinate for each pixel box 
            
            im2x=0
            im2y=0 

            im2mod=Image.open(flowers[num])
            hsize = int((float(im2mod.size[1])*float(0.5)))
            wsize =int((float(im2mod.size[1])*float(0.5)))
            im2mod = im2mod.resize((wsize,hsize), PIL.Image.ANTIALIAS)
            while im2x<width1:#move one column
                while im2y<height1:#move through each row on the column
                    box=(c1,c2,d1,d2)  # coordinate for each pixel box 
                    box2=(im2x,im2y,(im2x+1),(im2y+1)) # for cropping the fore ground
                    croppedbg=freshim1.crop(box)
                    
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
                    
                im2y=0
                #c2=49
                #c2=y1+(row*30)
                #c2=y1
                
                      
                #d2=0# start to row 0 in the next iteration
                c1=d1
                #c1=x1+(column*30)+1
                c2=y1+(row*15)                
                
                
                d1=c1+1
                
                
                d2=c2+1
                
                #space=5
         
                im2x=im2x+1 #for each foreground in the xaxis
                #box=(c1,c2,d1,d2)  # coordinate for each pixel box on the background image
                
            column=column+1#done with one column
               
            im2x=0# for each foreground
            im3mod=im2mod.crop((0,0,15,15))
            im1.paste(im3mod,(x,y))
        
            counter=counter+1
            im2mod=None
        return im1  
          
          
    
    
    
    def plantTrees(self,im1):
        #im1.save("myfile7.jpeg")
        #im1=Image.open("desert2.jpeg")
        im2=Image.open("tree1.jpeg")        
        width, height =im1.size 
        width1,height1=im2.size
        
        #subimage=im0.crop((0,0,width,51))
        
        tree=100
        counter=0
        im2array=[]
        house=Image.open("house.jpeg")
        housex=width/2
        housey=(height/2)+25
        
        hsize = int((float(house.size[1])*float(0.8)))
        wsize =int((float(house.size[1])*float(0.8)))
        house = house.resize((wsize,hsize), PIL.Image.ANTIALIAS)        
        
        
        
        
        housec1=housex
        housec2=housey
        housed1=housec1+1
        housed2=housec2+1
        
        
        orighousec1=housec1
        orighousec2=housec2
        orighoused1=housed1
        orighoused2=housed2
        
        #prevent tree from the location of the house
        '''
        posn=randit(0,1)
        if(posn==0):
            startmarker=0
            endmarker=orighousec1-70
            x1=randint(startmarker,endmarker)
        else:
            startmarker=orighousec1+60
            endmarker=300
            x1=randint(startmarker,endmarker)

            posn=randit(0,1)
        if(posn==0):
            startmarker=0
            endmarker=orighousec1-70
            x1=randint(startmarker,endmarker)
        else:
            startmarker=orighousec1+60
            endmarker=300
            x1=randint(0,marker)
        
        '''
        start_column_posn=0
        end_column_posn=75
        start_row_posn=50
        end_row_posn=75
        
        maximum_number_of_iterations=int((tree/4)/4)
        #if(maximum_number_of_iterations==0):
        #    maximum_number_of_iterations=1
        
        iteration=0
        #x1=randint(0,300)
        #y1=randint(50,150)
        x1=randint(start_column_posn,end_column_posn)
        y1=randint(start_row_posn,end_row_posn)
        
        original_start_column_posn=start_column_posn
        original_end_column_posn=end_column_posn
        
        while((x1>=(orighousec1) and x1<=(orighousec1+40)) or ((x1+50)>=(orighousec1) and (x1+50)<=(orighousec1+40))) and ((y1>=(orighousec2) and y1<=(orighousec2+40)) or ((y1+50)>=(orighousec1) and (y1+50)<=(orighousec1+40))):
            #x1=randint(0,300) 
            #y1=randint(50,150)
            x1=randint(start_column_posn,end_column_posn)
            y1=randint(start_row_posn,end_row_posn)            
        #while(y1>=(orighousec2) and y1<=(orighousec2+40)) or ((y1+50)>=(orighousec1) and (y1+50)<=(orighousec1+40)):
        #    y1=randint(50,150)
        

        
        sentinal=50
        num=0
        
        samplefg=im2.crop((0,0,1,1))#get a default white back ground that needs to be replaced with a portion from image backgr
        pix=samplefg.load()
        r,g,b=pix[0,0]
        space=0
        prevnum=-1
        trees=["tree0.jpeg","tree1.jpeg","tree2.jpeg","tree3.jpeg","tree4.jpeg","tree5.jpeg","tree6.jpeg","tree7.jpeg","tree8.jpeg","tree9.jpeg","tree10.jpeg","tree11.jpeg","tree12.jpeg","tree13.jpeg","tree14.jpeg","tree15.jpeg","tree16.jpeg","tree17.jpeg","tree18.jpeg","tree19.jpeg","tree20.jpeg","tree21.jpeg"]
        while counter<tree:
            
        

                
            if(maximum_number_of_iterations==iteration) and iteration>0:
                iteration=0
                start_column_posn=start_column_posn+75
                end_column_posn=end_column_posn+75
                if(start_column_posn>=300):
                    start_column_posn=original_start_column_posn
                    end_column_posn=original_end_column_posn
                    start_row_posn=start_row_posn+25
                    end_row_posn=end_row_posn+25
            elif (maximum_number_of_iterations==iteration) and iteration==0:
                start_column_posn=0
                end_column_posn=300
                start_row_posn=50
                end_row_posn=150



            #prevent trees from the house
            if(counter>=1):                                        
                
              
                #prevent tree from the location of the house
                '''
                x1=randint(2,298)
                while(x1>=(orighousec1) and x1<=(orighousec1+50)) or ((x1+50)>=(orighousec1) and (x1+50)<=(orighousec1+50)):
                    x1=randint(0,298) 
                y1=randint(50,148)
                while(y1>=(orighousec2) and y1<=(orighousec2+50)) or ((y1+50)>=(orighousec1) and (y1+50)<=(orighousec1+50)):
                    y1=randint(50,148)
                '''    

                x1=randint(start_column_posn,end_column_posn)
                y1=randint(start_row_posn,end_row_posn)

               
                #x1=randint(0,300)
                #y1=randint(50,150)
                while((x1>=(orighousec1) and x1<=(orighousec1+40)) or ((x1+50)>=(orighousec1) and (x1+50)<=(orighousec1+40))) and ((y1>=(orighousec2) and y1<=(orighousec2+40)) or ((y1+50)>=(orighousec1) and (y1+50)<=(orighousec1+40))):
                    #x1=randint(0,300) 
                    #y1=randint(50,150)
                    x1=randint(start_column_posn,end_column_posn)
                    y1=randint(start_row_posn,end_row_posn)

                
            
            
            if maximum_number_of_iterations>0:
                iteration=iteration+1
            c1=x1
            c2=y1
            d1=c1+1
            d2=c2+1 
            x=c1
            y=c2    
            
            num=randint(0, 21)
            #while(num==prevnum):
            #    num=randint(0, 21)
            print num    
            prevnum=num    
            
        
 
            im2x=0
            im2y=0 

            im2mod=Image.open(trees[num])
            #num=num+1
            if(num==21):
                num=0
             
            while im2x<width1:#move one column
                while im2y<height1:#move through each row on the column
                    
                    box2=(im2x,im2y,(im2x+1),(im2y+1)) # for cropping the fore ground
                    box=(c1,c2,d1,d2)  # coordinate for each pixel box
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
                    #box=(c1,c2,d1,d2)  # coordinate for each pixel box on the background image
                im2y=0
                #c2=49
                #c2=y1+(row*50)
                
                      
                #d2=0# start to row 0 in the next iteration
                #c1=d1
                
                
                #d1=c1+1
                
                
                #d2=c2+1
                
                
                c1=d1
                #c1=x1+(column*30)+1
                c2=y1               
                
                
                d1=c1+1
                
                
                d2=c2+1
                
                
         
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
        #box=(c1,c2,d1,d2)
        while im2x<width1:#move one column
          while im2y<height1:#move through each row on the column
                 
            box2=(im2x,im2y,(im2x+1),(im2y+1)) # for cropping the fore ground
            box=(c1,c2,d1,d2)  # coordinate for each pixel box on the background image
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
        
#im1=Image.open("desert2.jpeg")
#im2=Image.open("tree1.jpeg")
#im3=Image.open("flower1.jpeg")

obj=BotanicalGarden('katulentwa@gmail.com')
#garden=obj.plantFlowers(im1,im3)
#completegarden=obj.plantTrees(garden,im2)

garden=obj.plantFlowers()
#garden.save("mfile5.png")
completegarden=obj.plantTrees(garden)
completegarden.save('myfile5.png')
#plantFlowers(im1,im3)
#plantTrees(im1,im2)

#im1.save('myfile5.png')
