from .forms import ContactForm


def contactModal(request):
    return {'form': ContactForm()}