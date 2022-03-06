import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Cards from '../Cards'
import TableCountries from '../TableCountries'
import Map from '../Map'

function App() {
    const [data, setData] = useState([])
    const [dataCountries, setDataCountries] = useState([])
    const [topCasesCoutries, setTopCasesCoutries] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const [dataResponse, countriesResponse, topCasesResponse] =
                    await Promise.all([
                        axios.get('https://disease.sh/v3/covid-19/all'),
                        axios.get('https://disease.sh/v3/covid-19/countries'),
                        axios.get(
                            'https://disease.sh/v3/covid-19/countries?sort=cases'
                        ),
                    ])

                setData(dataResponse.data)
                setDataCountries(countriesResponse.data)
                setTopCasesCoutries(topCasesResponse.data)
            } catch (e) {
                alert('Произошла ошибка при получении данных')
                console.log(e)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            <h1 className='title'>Covid-19 Трекер</h1>
            <Cards data={data} />
            <TableCountries data={topCasesCoutries} />
            <Map data={dataCountries} />
        </>
    )
}

export default App
