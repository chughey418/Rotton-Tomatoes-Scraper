import scrapy
from challenge5.items import Challenge5Item

class CsSpider(scrapy.Spider):
    name = 'cs'
    
    def __init__(self, genre='', **kwargs):
        self.start_urls = [f'https://www.rottentomatoes.com/top/bestofrt/top_100_{genre}_movies/']
        super().__init__(**kwargs)
        

    def parse(self, response):

        table =  response.xpath("//table[@class = 'table']")
        
        for tr in table:
            ranks = tr.xpath(".//td[@class = 'bold']/text()").extract()
            titles = tr.xpath(".//td[3]/a/text()").extract()

        i = 0
        while (i <= 100):
            challenge5_item = Challenge5Item()
            challenge5_item['rank'] = ranks[i]
            challenge5_item['title'] = titles[i][13:]
            yield challenge5_item
            i+=1

