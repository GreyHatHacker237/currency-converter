from django.urls import path
from .views import ConvertAPIView, HistoryAPIView

urlpatterns = [
    path('convert/', ConvertAPIView.as_view(), name='convert'),
    path('history/', HistoryAPIView.as_view(), name='history'),
]
