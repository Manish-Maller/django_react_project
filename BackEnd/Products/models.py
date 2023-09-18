from django.db import models

# Create your models here.
class Products(models.Model):
    name = models.CharField(default=None, max_length=50)
    price=models.DecimalField(default=None,max_digits=5, decimal_places=2)
    description = models.TextField(default=None)
    category = models.CharField(default=None, max_length=50)
    product_image = models.ImageField(default=None, upload_to="uploads/images")

    # def __str__(self):
    #     return self.name, self.price, self.description