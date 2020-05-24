from rest_framework import serializers
from .models import Org

class OrgListSerializer(serializers.ModelSerializer):
    main_image = serializers.ImageField(max_length=None , use_url=True)
    ngo_image = serializers.ImageField(max_length=None , use_url=True)
    class Meta:
        model = Org
        fields = ('main_image','ngo_image','title','ngo_name','slug','ketto_link','ngo_email','ngo_website','ngo_contact','ngo_location')

class OrgCreateSerializer(serializers.ModelSerializer):
    main_image = serializers.ImageField(max_length=None , use_url=True)
    ngo_image = serializers.ImageField(max_length=None , use_url=True)
    class Meta:
        model = Org
        fields = ('main_image','ngo_image','title','ngo_name')