import lxml.html
import requests
import string, datetime, os, csv, time, random

#SLEEP_TIME = 21600 + (random.random() * 1000)
SLEEP_TIME = 2160 + (random.random() * 1000)

schema = ['date', 'time', 'temp_celsius', 'high', 'low', 'weather', 'status', 'report_type', 'today_forecast', 'tomorrow_forecast', 'snow_12hr', 'snow_24hr', 'snow_48hr', 'snow_overnight', 'snow_7days', 'snow_total', 'snow_snowmaking', 'snow_peak', 'snow_plateau']

csv_name = 'grouse_weather_report.csv'

def parse_text(text):
    return list(filter(lambda x: len(x) > 0, text.split('\n')))

def get_temp(text, temp_type):
    temp = ''
    if temp_type in text:
        split = text.split(temp_type + ': ')
        split = split[1].split(' ')
        temp = split[0]
    return temp

def main():
    url = 'https://www.grousemountain.com/current_conditions'
    response = requests.get(url)
    tree = lxml.html.fromstring(response.text)
    #tree = lxml.html.parse('sample.html').getroot()

    # Current temp/conditions
    while True:
        conditions = tree.xpath('//div[@class="current-weather__content"]')[0].text_content()
        parsed_conditions = parse_text(conditions)
        celsius = parsed_conditions[0][:-2]
        weather = parsed_conditions[-1]
        current_status = tree.xpath('//div[@class="current_status"]')[0].text_content()
        parsed_status = parse_text(current_status)
        status = '{} {}'.format(*parsed_status[:2])
        report_type = '{} {}'.format(*parsed_status[2:4])

        # Weather forecaset
        forecast = tree.xpath('//div[@class="forecast"]')[0].text_content()
        parsed_forecast = parse_text(forecast)
        today, tomorrow = parsed_forecast[1], parsed_forecast[3]
        high_today = get_temp(today, 'High')
        low_today = get_temp(today, 'Low')


        # Short term snow totals
        snow_today = tree.find_class("conditions-snow-report__stats-day")[0].text_content()
        parsed_snow_today = parse_text(snow_today)
        snow_12hr = parsed_snow_today[1].strip(string.ascii_letters)
        snow_24hr = parsed_snow_today[7].strip(string.ascii_letters)
        snow_48hr = parsed_snow_today[10].strip(string.ascii_letters)
        snow_overnight = parsed_snow_today[4].strip(string.ascii_letters)

        # Long term snow totals
        snow_summary = tree.find_class('conditions-snow-report__stats-season')[0].text_content()
        parsed_snow_summary = parse_text(snow_summary)
        snow_7days = parsed_snow_summary[1].strip(string.ascii_letters)
        snow_total = parsed_snow_summary[4].strip(string.ascii_letters)
        snow_snowmaking = parsed_snow_summary[7].strip(string.ascii_letters)
        snow_peak = parsed_snow_summary[10].strip(string.ascii_letters)
        snow_plateau = parsed_snow_summary[13].strip(string.ascii_letters)

        # Write to CSV
        date, current_time = str(datetime.datetime.now()).split(' ')
        row = [date, current_time, celsius, high_today, low_today, weather, status, report_type, today, tomorrow, snow_12hr, snow_24hr, snow_48hr, snow_overnight, snow_7days, snow_total, snow_snowmaking, snow_peak, snow_plateau]
        print(row)

        if os.path.exists(csv_name):
            with open(csv_name, 'a') as f:
                writer = csv.writer(f)
                writer.writerow(row)
            print('exists')
        else:
            print('creating csv')
            with open(csv_name, 'w') as f:
                writer = csv.writer(f)
                writer.writerow(schema)
                writer.writerow(row)

        time.sleep(SLEEP_TIME)



if __name__ == '__main__':
    main()
