from django.shortcuts import render
from .models import Org
from rest_framework.generics import ListAPIView , RetrieveAPIView, CreateAPIView
from rest_framework.pagination import PageNumberPagination
from .serializers import OrgListSerializer, OrgCreateSerializer
from rest_framework import filters

# Create your views here.
class OrgAllView(ListAPIView):
    queryset = Org.objects.all()
    serializer_class = OrgListSerializer
    PageNumberPagination.page_size = 6
    pagination_class = PageNumberPagination
    filter_backends = [filters.OrderingFilter]
    ordering = ['-ngo_email']

class OrgSingleView(RetrieveAPIView):
    queryset = Org.objects.all()
    serializer_class = OrgListSerializer
    lookup_field = 'slug'

class OrgCreateView(CreateAPIView):
    queryset = Org.objects.all()
    serializer_class = OrgCreateSerializer

