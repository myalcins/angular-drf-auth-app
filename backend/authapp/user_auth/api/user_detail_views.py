from rest_framework.viewsets import ModelViewSet
from ..models import User
from .user_detail_serializers import UserSerializer
from rest_framework import permissions, authentication


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['get', 'options']
    permission_classes = [permissions.IsAuthenticated,]
