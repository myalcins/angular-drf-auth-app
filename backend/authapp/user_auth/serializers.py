from .models import User
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True,
                                    style={'input_type': 'password'}, 
                                    validators=[validate_password])
    verify_password = serializers.CharField(write_only=True, required=True,
                                            style={'input_type': 'password'})

    class Meta:
        model = User
        fields = (
            'email',
            'username',
            'password',
            'verify_password'
        )

    def validate(self, attrs):
        if attrs['password'] != attrs['verify_password']:
            raise serializers.ValidationError("Password fields didn't match.")

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()

        return user