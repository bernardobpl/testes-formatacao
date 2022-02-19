import { Table } from "./table"

function App() {
  const columns = [
    {
      name: 'Primeira', field: 'primeira'
    },
    {
      name: 'Segunda', field: 'segunda'
    },
    {
      name: 'Terceira', field: 'terceira'
    }
  ]

  const rows = [
    {
      id: 'ldhaslkjd',
      primeira: 'primeira oi ',
      segunda: 'eu sou',
      terceira: 'goku'
    },
    {
      id: 'zasdhaksjdh',
      primeira: 'segunda oi ',
      segunda: 'eu sou',
      terceira: 'goku'
    },
    {
      id: 'gfhjalksdhasd',
      primeira: 'terceira oi ',
      segunda: 'eu sou',
      terceira: 'goku'
    },
  ]

  return (
    <Table 
      columns={columns}
      rows={rows}
      textAlign='center'
      columnGap={200}
      rowGap={40}
      checkbox={true}
      onCheck={(selectedRows,isChecked,id,index) => {
        console.log('selectedRows: ', selectedRows)
        console.log('isChecked: ', isChecked)
        console.log('id: ', id)
        console.log('index: ', index)
      }}
      onClickRow={(row) => console.log(row)}
      onClickHeader={(columnHeader) => console.log(columnHeader)}
    />
  )
}

export default App
