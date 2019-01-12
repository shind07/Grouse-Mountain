import lxml.html
import requests

def main():
    # url = 'https://www.grousemountain.com/current_conditions'
    # response = requests.get(url)
    # tree = lxml.html.fromstring(response.text)
    tree = lxml.html.parse('sample.html').getroot()
    #
    conditions = tree.xpath('//div[@class="current-weather__content"]')[0].text_content()
    # celsius = temps.find('C')
    # print(temps[celsius-2])
    parsed_conditions = list(filter(lambda x: len(x) > 0, conditions.split('\n')))
    celsius = parsed_conditions[0]
    weather = parsed_conditions[-1]

    current_status = tree.xpath('//div[@class="current_status"]')[0].text_content()
    parsed_status = list(filter(lambda x: len(x) > 0, current_status.split('\n')))
    status = '{} {}'.format(*parsed_status[:2])
    report_type = '{} {}'.format(*parsed_status[2:4])

    row = [celsius, weather, status, report_type]
    print(row)



if __name__ == '__main__':
    main()
