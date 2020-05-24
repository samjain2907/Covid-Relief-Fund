from django.db import models
from django.core.files import File
from urllib.request import urlopen
from tempfile import NamedTemporaryFile
from django.utils.text import slugify


# Create your models here.
class Org(models.Model):
    title = models.CharField(max_length=100)
    main_image = models.ImageField(upload_to='images/', blank=True, null=True)
    ngo_image = models.ImageField(upload_to='ngo_images/', blank=True, null=True)
    main_image_link = models.URLField(max_length=300, blank=True, null=True)
    ngo_image_link = models.URLField(max_length=300, blank=True, null=True)
    ngo_name = models.CharField(max_length=100)
    ngo_website = models.URLField(max_length=300, blank=True, null=True)
    ngo_contact = models.CharField(max_length=20, blank=True, null=True)
    ngo_email = models.EmailField(blank=True, null=True)
    ngo_location = models.CharField(max_length=100, blank=True, null=True)
    ketto_link = models.URLField(max_length=300)
    slug = models.SlugField(max_length=200, default='', editable=False)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):

        self.slug = slugify(self.title, allow_unicode=True)

        if self.main_image_link and not self.main_image:
            img_temp = NamedTemporaryFile(delete=True)
            img_temp.write(urlopen(self.main_image_link).read())
            img_temp.flush()
            self.main_image.save(f"image-{self.slug}.jpeg", File(img_temp))

        if self.ngo_image_link and not self.ngo_image:
            img_temp = NamedTemporaryFile(delete=True)
            img_temp.write(urlopen(self.ngo_image_link).read())
            img_temp.flush()
            self.ngo_image.save(f"image-{self.slug}.jpeg", File(img_temp))

        super(Org, self).save(*args, **kwargs)
