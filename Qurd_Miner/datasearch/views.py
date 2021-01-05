from django.shortcuts import render,redirect,HttpResponse
import requests
import json
from django.contrib import messages
from django.db import connection

# Create your views here.

# def index(request):
#     return render(request,'helloworld.html')

def form(req):
    data = {
        'view':'hidden'
    }
    
    return render(req,'index.html',data)

def Search(a):
    cur = connection.cursor()
    cur.execute('select indicator from reputation_data where indicator=\'%s\';'%a)
    result = cur.fetchone()
    print(result)
    if result == None:
        return "결과가 없습니다"
    else:
        return result[0]

def index(req):
    # view = 'hidden'
    data = {
        'view':'hidden'
    }
    if (req.method == None):
        return render(req,'index.html',data)
        
    elif(req.method == 'POST'):
        if(req.POST.get('Search_type') == '' or req.POST.get('Search_data') == ''):
            return render(req,'alert.html')

        else:
            print('POST')
            Search_type = req.POST.get('Search_type')
            print('ID DATA = ',Search_type)
            Search_data = req.POST.get('Search_data')
            print('PW DATA = ',Search_data)
            Search_result = Search(Search_data)



            data = {
                'Search_type':Search_type,
                'Search_result':Search_result,
                'view':'visible'
            }
            print(data)
            return render(req,'index.html',data)


    else:
        return render(req,'index.html')

    


