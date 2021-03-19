from .models import User
from .serializers import RegisterSerializer
from rest_framework import generics


class RegisterAPIView(generics.CreateAPIView):
    serializer_class = RegisterSerializer