# -*- coding: utf-8 -*-
import scrapy
import json
from ..items import ScraperItem
import difflib


class CovidfundSpider(scrapy.Spider):
    name = 'covidfund'
    page = 0
    start_urls = ['https://covid19.ketto.org/dashboard/custom/dashboard.php?fmd_id=1399904&task=get_campaigns&fmd_count=8&entity_type=events&page=' + str(page)]

    def parse(self, response):

        data = json.loads(response.text)

        for r in data[0]:
            item = ScraperItem()

            try:
                item['title'] = r['title']
                
                next = 'https://covid19.ketto.org/fundraiser/' + r['custom_tag']
                item['ketto_link'] = next
                item['main_image_link'] = 'https://covid19.ketto.org' + r['path'] + r['file_name']

                yield scrapy.Request(url=next, callback=self.parsefollow, meta={'item':item})
            except Exception as e:
                item['title'] = ''
                item['ngo_name'] = ''
                yield item
            
        
        if self.page < 6:
            self.page += 1
            next_page = 'https://covid19.ketto.org/dashboard/custom/dashboard.php?fmd_id=1399904&task=get_campaigns&fmd_count=8&entity_type=events&page=' + str(self.page)
            yield response.follow(url=next_page, callback=self.parse)

    def parsefollow(self, response):
        item = response.meta['item']
        try:
            item['ngo_name'] = response.css('.beneficiary-box h5').css('::text').extract()[0]
        except:
            item['ngo_name'] = ''
            return item

        try:
            item['ngo_image_link'] = response.css('.center-block .img-responsive').css('::attr(src)').extract()[0]
        except:
            item['ngo_image_link'] = ''

        
        next = 'https://guidestarindia.org/Search.aspx?q=' + str(item['ngo_name'])            
        yield scrapy.Request(url=next, callback=self.parseguidestar, meta={'item':item})
            

    def parseguidestar(self, response):   
        item = response.meta['item']
        try:
            text = response.css('.CTPResultsContentCell a').css('::text').extract()[0].lower()
            a = item['ngo_name'].lower()

            dif = difflib.SequenceMatcher(isjunk=None,a=a, b=text).ratio() * 100
            if round(dif, 1) >= 80:
                link = response.css('.CTPResultsContentCell a').css('::attr(href)').extract()[0]
                next = 'https://guidestarindia.org' + str(link)
                yield scrapy.Request(url=next, callback=self.parseorgdetail, meta={'item':item})
            else:
                next = 'https://www.google.com/search?q='+ str(item['ngo_name'] + 'india')
                yield scrapy.Request(url=next, callback=self.parseweb, meta={'item':item})

        except:
            next = 'https://www.google.com/search?q='+ str(item['ngo_name'] + 'india')
            yield scrapy.Request(url=next, callback=self.parseweb, meta={'item':item})

    def parseweb(self, response):
        item = response.meta['item']
        data = response.css('.tjvcx::text').extract()
        
        for link in data:
            a = link.split('.')[-2]
            names = item['ngo_name'].split()
            
            names.append(''.join(list(filter(str.isupper, item['ngo_name']))).lower())

            for b in names:
                dif = difflib.SequenceMatcher(isjunk=None,a=a, b=b).ratio() * 100
                if round(dif, 1) >= 50:
                    item['ngo_website'] = link.split()[0]
                    return item    
        
        return item


    def parseorgdetail(self, response):
        item = response.meta['item']

        item['ngo_email'] = response.css('#SectionPlaceHolder1_ctl01_textEmail_ctl09+ a').css('::text').extract()[0]
        item['ngo_website'] = response.css('#SectionPlaceHolder1_ctl01_textWeb_ctl09+ a').css('::text').extract()[0]
        try:
            district = response.css('#SectionPlaceHolder1_ctl01_ccAddrState , #SectionPlaceHolder1_ctl01_ccAddrDistrict').css('::text').extract()[2]
            state = response.css('#SectionPlaceHolder1_ctl01_ccAddrState , #SectionPlaceHolder1_ctl01_ccAddrDistrict').css('::text').extract()[6]
            item['ngo_location'] = f'{district}, {state}'
        
        except:
            pass
        
        contact = response.css('#SectionPlaceHolder1_ctl01_DynVariableList2_DynVariableList2ItemContainer0').css('::text').extract()
        item['ngo_contact'] = ''.join([x.strip() for x in contact if x.strip() != ''])

        return item