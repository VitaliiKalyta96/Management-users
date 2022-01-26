from django.urls import re_path
from groupusers import views


app_name = 'groupusers'

urlpatterns = [
    re_path(r'^group_users/$', views.group_users_list),
    re_path(r'^group_users/(?P<pk>[0-9]+)$', views.group_users_detail),
]