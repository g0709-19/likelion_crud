from django.shortcuts import render, redirect, get_object_or_404
from .models import Item

# Create your views here.

def home(request):
    shop = Item.objects.all()
    return render(request, 'home.html', {'shop':shop})

def create(request):
    # 강의를 따라 완성해봅시다.
    if request.method == 'POST':
        post = Item()
        post.name = request.POST['name']
        post.price = request.POST['price']

        post.save()
        return redirect('home')

def update(request, item_id):
    if request.method == 'POST':
        item = get_object_or_404(Item, pk=item_id)
        item.name = request.POST['name']
        item.price = request.POST['price']

        item.save()
        return redirect('home')
    else:
        item = get_object_or_404(Item, pk=item_id)
        return render(request, 'update.html', {'item':item})

def delete(request, item_id):
    item = get_object_or_404(Item, pk=item_id)
    item.delete()
    return redirect('home')