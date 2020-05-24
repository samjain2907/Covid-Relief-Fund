# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
from orgs.models import Org

class ScraperPipeline:
    def process_item(self, item, spider):
        if not (Org.objects.filter(title=item['title']).exists() or item['ngo_name'] == '' or item['title'] == ''):
            item.save()
        return item
