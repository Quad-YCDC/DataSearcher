from django.shortcuts import render,redirect,HttpResponse
import requests
import json
from django.contrib import messages

# Create your views here.

def index(request):
    return render(request,'helloworld.html')

def form(req):
    data = {
        'view':'hidden'
    }
    
    return render(req,'test.html',data)

def test_post(req):
    return render(req,'post.html')

def test_get(req):
    return render(req,'get.html')

def test(req):
    # view = 'hidden'
    data = {
        'view':'hidden'
    }
    if (req.method == None):
        return render(req,'test.html',data)
        
    elif(req.method == 'POST'):
        if(req.POST.get('ID') == '' or req.POST.get('PW') == ''):
            return render(req,'alert.html')

        else:
            print('POST')
            ID = req.POST.get('ID')
            print('ID DATA = ',ID)
            PW = req.POST.get('PW')
            print('PW DATA = ',PW)
            data = {
                'ID':ID,
                'PW':PW,
                'view':'visible'
            }
            return render(req,'test.html',data)


    else:
        return render(req,'test.html')
    


