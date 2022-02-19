import { useState, VFC } from "react"
import './style.css'

export interface ITableColumn { 
  name: string
  field: string 
}

export interface ITableRow {
  [key:string]: string | boolean | undefined
  id: string
  isChecked?: boolean
}

export interface ITable<T> {
  columns: ITableColumn[]
  rows: ITableRow[]
  isLoading?: boolean
  hideHeader?: boolean
  textAlign?: "left" | "center"  | "right"
  columnGap?: number
  rowGap?: number
  checkbox?: boolean
  onCheck?: (selectedRows: ITableRow[], isChecked: boolean, id: string, index: number) => void
  onClickRow?: (row: ITableRow) => void
  onClickHeader?: (columnHeader: ITableColumn) => void
}

export const Table:VFC<ITable> = ({ 
  columns, 
  rows,
  isLoading,
  hideHeader,
  textAlign,
  columnGap,
  rowGap,
  checkbox,
  onCheck,
  onClickRow,
  onClickHeader
}) => {
  const [thisRows, setThisRows] = useState<ITableRow[]>(rows.map(row => ({...row, isChecked: false})))
  const [selectedRows, setSelectedRows] = useState<ITableRow[]>([])

  const handleCheck = (isChecked: boolean, id: string, index: number) => {
    const clone = thisRows.map(row => ({...row}))
    clone[index] = {...clone[index], isChecked}
    setThisRows(clone);

    const updatedSelectedList = [...clone.filter(row => row.isChecked)]
    setSelectedRows([...updatedSelectedList])
    onCheck && onCheck([...updatedSelectedList], isChecked, id, index)
  }

  if (isLoading) {
    return <TableSkeleton />
  }

  return (
    <div className="table">
      {!hideHeader && <div className="header" style={{textAlign: textAlign}}>
        {columns.map((column, index) => {
          return index === 0 && checkbox
            ? (
              <div key={column.field} style={{display: 'flex'}}>
                <div className="th">
                  <input type="checkbox" style={{visibility: 'hidden'}}/> 
                </div>
                <div className="th" style={{width: `${columnGap}px`}} >
                  <span onClick={() => onClickHeader && onClickHeader(column)}>{column.name}</span>
                </div>
              </div>
            ) : (
              <div className="th" style={{width: `${columnGap}px`}} key={column.field} >
                <span onClick={() => onClickHeader && onClickHeader(column)}>{column.name}</span>
              </div>
            )
        })}
      </div>}
      <div className="body">
        {thisRows.map((row, rowIndex) => (
          <div key={row.id} className="row" onClick={() => onClickRow && onClickRow(row) }>
            {columns.map((column, index) => {
              return index === 0 && checkbox
                ? (
                  <div key={row.id + column.field} style={{display: 'flex'}}>
                    <div className="td" style={{height: `${rowGap}px`, justifyContent: textAlign}}>
                      <input 
                        type="checkbox" 
                        checked={row.isChecked} 
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCheck(e.currentTarget.checked, row.id, rowIndex)
                        }}
                        readOnly
                      /> 
                    </div>
                    <div className="td" style={{width: `${columnGap}px`, height: `${rowGap}px`, justifyContent: textAlign}}>
                      {row[column.field]}
                    </div>
                  </div>
                ) : (
                  <div key={row.id + column.field} className="td" style={{width: `${columnGap}px`, height: `${rowGap}px`, justifyContent: textAlign}}>
                    {row[column.field]}
                  </div>
                )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}