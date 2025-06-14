from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


def services(request):
    return render(request, 'services.html')


def chooseUs(request):
    return render(request, 'whychooseus.html')


def contact(request):
    return render(request, 'contact.html')


def compliancesAndDisclosures(request):
    return render(request, "compliancesanddisclosures.html")