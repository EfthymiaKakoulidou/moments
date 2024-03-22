from rest_framework_decorators import api_view
from rest_framework_response import Response


@api_view()
def root_route(request):
    return Response({
        'messages': 'Welcome to my drf API'
    })