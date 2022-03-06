import { YMaps, Map as MapY, Placemark } from 'react-yandex-maps'

const Map = ({ data }) => {
    const countriesLocations = data.map((data, i) => {
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
        <div>
            <h2 className='subtitle'>Covid статистика по странам</h2>
            <YMaps>
                <MapY
                    defaultState={{
                        center: [50.450441, 30.52355],
                        zoom: 4,
                    }}
                    className='map__wrapper'
                >
                    {countriesLocations}
                </MapY>
            </YMaps>
        </div>
    )
}

export default Map
