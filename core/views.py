from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import ContactForm
from django.core.mail import send_mail
from django.conf import settings

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
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Get cleaned data
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject'] or "No Subject"
            message = form.cleaned_data['message']

            # Email content
            full_message = f"From: {name} <{email}>\n\n{message}"

            # Send email
            send_mail(
                subject,
                full_message,
                settings.DEFAULT_FROM_EMAIL,  # From email
                [settings.CONTACT_RECEIVER_EMAIL],  # To email
                    fail_silently=False,
            )

            messages.success(request, "Your message has been sent successfully.")
            return redirect('home')  
    else:
        form = ContactForm()

    return render(request, 'contact.html', {'form': form})


def compliancesAndDisclosures(request):
    return render(request, "compliancesanddisclosures.html")