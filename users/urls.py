from django.urls import re_path
from users import views


app_name = 'users'

urlpatterns = [
    re_path(r'^users/$', views.users_list),
    re_path(r'^users/(?P<pk>[0-9]+)$', views.users_detail),
]