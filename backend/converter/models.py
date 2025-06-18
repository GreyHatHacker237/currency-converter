from django.db import models

class Conversion(models.Model):
    from_currency = models.CharField(max_length=3)
    to_currency = models.CharField(max_length=3)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    result = models.DecimalField(max_digits=12, decimal_places=2)
    rate = models.DecimalField(max_digits=12, decimal_places=6)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.amount} {self.from_currency} → {self.to_currency} = {self.result}"
