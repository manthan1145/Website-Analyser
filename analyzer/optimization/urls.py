
from django.conf.urls import url
from .views import *

urlpatterns = [
	url(r'$', BasicView.as_view(), name='homepage'),	
]	
