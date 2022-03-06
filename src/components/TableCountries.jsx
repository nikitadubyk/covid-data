import { Table } from 'react-bootstrap'
import NumberFormat from 'react-number-format'

const TableCountries = ({ data }) => {
    const topCountries = data.slice(0, 15).map((data, i) => {
        return (
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.country}</td>
                <td>
                    <NumberFormat
                        value={data.cases}
                        displayType={'text'}
                        thousandSeparator={true}
                    />
                </td>
                <td>
                    <NumberFormat
                        value={data.deaths}
                        displayType={'text'}
                        thousandSeparator={true}
                    />
                </td>
                <td>
                    <NumberFormat
                        value={data.recovered}
                        displayType={'text'}
                        thousandSeparator={true}
                    />
                </td>
            </tr>
        )
    })
    return (
        <div className='table__wrapper'>
            <Table striped bordered hover responsive size='sm'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Страна</th>
                        <th>Кол-во заразившихся</th>
                        <th>Кол-во смертей</th>
                        <th>Кол-во выздоровевших</th>
                    </tr>
                </thead>
                <tbody>{topCountries}</tbody>
            </Table>
        </div>
    )
}

export default TableCountries
