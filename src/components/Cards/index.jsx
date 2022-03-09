import { Card } from 'react-bootstrap'
import NumberFormat from 'react-number-format'

const Cards = ({ data }) => {
    const date = new Date(parseInt(data.updated))
    const lastUpdate = date.toLocaleDateString()

    return (
        <div className='card__wrapper'>
            <Card bg='light' className='card__item'>
                <Card.Body>
                    <Card.Title>Всего заражений</Card.Title>
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
                <Card.Footer>Последнее обновление: {lastUpdate}</Card.Footer>
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
                <Card.Footer>Последнее обновление: {lastUpdate}</Card.Footer>
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
                <Card.Footer>Последнее обновление: {lastUpdate}</Card.Footer>
            </Card>
        </div>
    )
}

export default Cards
