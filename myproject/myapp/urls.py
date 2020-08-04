from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('create/', views.create, name='create'),
    path('update/<int:item_id>', views.update, name='update'),
    path('delete/<int:item_id>', views.delete, name='delete'),
]
