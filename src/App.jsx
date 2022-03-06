import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NumberFormat from 'react-number-format'
import { Card } from 'react-bootstrap'
import { useState, useEffect } from 'react/cjs/react.development'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

function App() {
    const [data, setData] = useState([])
    const [dataCountries, setDataCountries] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://disease.sh/v3/covid-19/all')
            const json = await res.json()
            setData(json)
            console.log(json)
        }

        async function fetchAllCountries() {
            const res = await fetch('https://disease.sh/v3/covid-19/countries')
            const json = await res.json()
            setDataCountries(json)
        }

        fetchAllCountries()
        fetchData()
    }, [])

    const date = new Date(parseInt(data.updated))
    const lastUpdate = date.toLocaleDateString()

    const countriesLocations = dataCountries.map((data, i) => {
        return (
            <Placemark
                key={i}
                geometry={[data.countryInfo.lat, data.countryInfo.long]}
                properties={{
                    iconCaption: data.cases,
                }}
            />
        )
    })

    return (
        <>
            <h1 className='title'>Covid-19 Трекер</h1>
            <div className='card__wrapper'>
                <Card bg='light' className='card__item'>
                    <Card.Body>
                        <Card.Title>Всего заражений</Card.Title>
                        {/* <Card.Text>{data.cases}</Card.Text> */}
                        <Card.Text>
                            <NumberFormat
                                value={data.cases}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </Card.Text>
                        <Card.Text>
                            За сегодня: {''}
                            <NumberFormat
                                value={data.todayCases}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        Последнее обновление: {lastUpdate}
                    </Card.Footer>
                </Card>
                <Card bg='danger' text='light' className='card__item'>
                    <Card.Body>
                        <Card.Title>Смертрельные случаи</Card.Title>
                        <Card.Text>
                            <NumberFormat
                                value={data.deaths}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </Card.Text>
                        <Card.Text>
                            За сегодня: {''}
                            <NumberFormat
                                value={data.todayDeaths}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        Последнее обновление: {lastUpdate}
                    </Card.Footer>
                </Card>
                <Card bg='success' text='light' className='card__item'>
                    <Card.Body>
                        <Card.Title>Выздоровевшие</Card.Title>
                        <Card.Text>
                            <NumberFormat
                                value={data.recovered}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </Card.Text>
                        <Card.Text>
                            За сегодня: {''}
                            <NumberFormat
                                value={data.todayRecovered}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        Последнее обновление: {lastUpdate}
                    </Card.Footer>
                </Card>
            </div>

            <div>
                <h2 className='subtitle'>Covid статистика по странам</h2>
                <YMaps>
                    <Map
                        defaultState={{
                            center: [50.450441, 30.52355],
                            zoom: 4,
                        }}
                        className='map__wrapper'
                    >
                        {countriesLocations}
                    </Map>
                </YMaps>
            </div>
        </>
    )
}

export default App
