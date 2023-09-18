from django.shortcuts import render
from .serializers import ProductsSerializers
from .models import Products
from rest_framework import viewsets
# Create your views here.

class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializers