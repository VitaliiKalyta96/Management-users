"""django_react_proj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

# from users import views
# from groupusers import views

# from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('users.urls')),
    path('api/', include('groupusers.urls')),
    # re_path(r'^api/students/$', views.students_list),
    # re_path(r'^api/students/(?P<pk>[0-9]+)$', views.students_detail),
    # re_path(r'^api/users/$', views.users_list),
    # re_path(r'^api/users/(?P<pk>[0-9]+)$', views.users_detail),
    # re_path(r'^api/group_users/$', views.group_users_list),
    # re_path(r'^api/group_users/(?P<pk>[0-9]+)$', views.group_users_detail),
]
