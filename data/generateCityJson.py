import csv
import json
import datetime, pytz
import pycountry

fin = open('cities15000.txt', 'r')
reader = csv.reader(fin, 'excel-tab')
cities = {}

for record in reader:
    (geonameid, name, asciiname, alternatenames, latitude, longitude,
     featureclass, featurecode, countrycode, cc2, admin1code,
     admin2code, admin3code, admin4code, population,
     elevation, dem, timezone, modificationdate) = record
     
    # Ignore small cities
    if int(population) > 50000 and asciiname:
        offset = datetime.datetime.now(pytz.timezone(timezone)).strftime('%z')
        #print 'CountryCode:' + countrycode
        if countrycode == 'XK':
            countryname = 'Kosovo'
        else:
            countryname = pycountry.countries.get(alpha2=countrycode).name
        cities[asciiname] = [
                                offset, 
                                countryname,
                                #'n': nexttransition
                            ]
        #print cities[asciiname]
                           

fjson = open('cities.json', 'w')
json.dump(cities, fjson)
fjson.close()