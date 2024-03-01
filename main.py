import requests
from bs4 import BeautifulSoup
from django.http import JsonResponse

def process_url(request):
    if request.method =='post':
        URL = request.POST.get('url')
        pages = requests.get(URL)
        soup = BeautifulSoup(pages.content,"html.parser")
        paragraph = soup.find("p").text

        return JsonResponse({'heading':paragraph})



