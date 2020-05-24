from django.urls import path
from .views import OrgAllView, OrgSingleView, OrgCreateView

urlpatterns = [
    path('all/', OrgAllView.as_view()),
    path('all/<slug>/', OrgSingleView.as_view()),
    path('create/', OrgCreateView.as_view())
]
