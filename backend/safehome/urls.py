from django.urls import path
from . import views


urlpatterns = [
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register', views.registerUser ,name="user-register"),
    path('users/profile', views.getUserProfile, name='user'),
    path('users/profile/update', views.updateUserProfile, name="user-profile-update"),
    
]