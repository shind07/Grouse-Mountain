import lxml.html
import requests

def parse_text(text):
    return list(filter(lambda x: len(x) > 0, text.split('\n')))
def main():
    # url = 'https://www.grousemountain.com/current_conditions'
    # response = requests.get(url)
    # tree = lxml.html.fromstring(response.text)
    tree = lxml.html.parse('sample.html').getroot()
    #
    conditions = tree.xpath('//div[@class="current-weather__content"]')[0].text_content()
    # celsius = temps.find('C')
    # print(temps[celsius-2])
    parsed_conditions = parse_text(conditions)
    celsius = parsed_conditions[0]
    weather = parsed_conditions[-1]

    current_status = tree.xpath('//div[@class="current_status"]')[0].text_content()
    parsed_status = parse_text(current_status)
    status = '{} {}'.format(*parsed_status[:2])
    report_type = '{} {}'.format(*parsed_status[2:4])


    forecast = tree.xpath('//div[@class="forecast"]')[0].text_content()
    parsed_forecast = parse_text(forecast)
    today, tomorrow = parsed_forecast[1], parsed_forecast[3]
    row = [celsius, weather, status, report_type, today, tomorrow]
    print(row)



if __name__ == '__main__':
    main()
