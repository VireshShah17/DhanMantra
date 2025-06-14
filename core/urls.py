from django.urls import path
from . import views

urlpatterns = [
    path('', view = views.home, name = 'home'),
    path('about/', view = views.about, name = 'about'),
    path('services/', view = views.services, name='services'),
    path('whychooseus/', view = views.chooseUs, name = 'whychooseus'),
    path('contactus/', view = views.contact, name = 'contact'),
    path('compliancesanddisclousers', view = views.compliancesAndDisclosures, name = 'compliancesanddisclousers'),
]
