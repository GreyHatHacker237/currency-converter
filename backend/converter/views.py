from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Conversion
from .serializers import ConversionSerializer

class ConvertAPIView(APIView):
    def post(self, request):
        try:
            amount = float(request.data.get("amount"))
            from_currency = request.data.get("from_currency")
            to_currency = request.data.get("to_currency")

            rates = {
                "EUR": {"USD": 1.08, "XAF": 655.96, "GBP": 0.85},
                "USD": {"EUR": 0.93, "XAF": 603.38, "GBP": 0.79},
                "XAF": {"EUR": 0.0015, "USD": 0.0017, "GBP": 0.0013},
                "GBP": {"EUR": 1.17, "USD": 1.26, "XAF": 777.70}
            }

            if from_currency not in rates or to_currency not in rates[from_currency]:
                return Response(
                    {"error": "Taux de change indisponible."},
                    status=status.HTTP_400_BAD_REQUEST
                )

            rate = rates[from_currency][to_currency]
            result = round(amount * rate, 2)

            
            Conversion.objects.create(
                from_currency=from_currency,
                to_currency=to_currency,
                amount=amount,
                rate=rate,
                result=result
            )

            return Response({
                "amount": amount,
                "from_currency": from_currency,
                "to_currency": to_currency,
                "rate": rate,
                "result": result
            })

        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HistoryAPIView(APIView):
    def get(self, request):
        conversions = Conversion.objects.all().order_by('-date')
        serializer = ConversionSerializer(conversions, many=True)
        return Response(serializer.data)
