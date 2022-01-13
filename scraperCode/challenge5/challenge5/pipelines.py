# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db


class Challenge5Pipeline:
    key = {
        #confidential info here
        
        
    }
    cred = credentials.Certificate(key)
    firebase_admin.initialize_app(cred, {
        'databaseURL' : 'https://rotton-tomatoes-scraper-default-rtdb.firebaseio.com/'
    })

    db_ref = db.reference('/challenge5/')

    #set databse to empty when spider begins
    def open_spider(self, spider):
        self.db_ref.set({})


    def process_item(self, item, spider):
        movie = {
            'rank': item["rank"],
            'title': item["title"]
        }

        self.db_ref.push(movie)
        return item
