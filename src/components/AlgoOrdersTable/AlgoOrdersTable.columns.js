import React from 'react'

import { reactVirtualizedCellRenderer } from '../../util/ui'

export default (authToken, cancelOrder, gaCancelOrder) => [{
  label: 'Name',
  dataKey: 'name',
  width: 90,
  flexGrow: 0.7,
  cellRenderer: ({ rowData = {} }) => reactVirtualizedCellRenderer(rowData.name),
}, {
  label: 'Context',
  dataKey: 'args._margin',
  width: 65,
  flexGrow: 0.65,
  cellRenderer: ({ rowData = {} }) => reactVirtualizedCellRenderer(rowData.args?._margin ? 'Margin' : 'Exchange'),
}, {
  label: 'Created',
  dataKey: 'gid',
  width: 155,
  flexGrow: 1.55,
  cellRenderer: ({ rowData = {} }) => reactVirtualizedCellRenderer(new Date(+rowData.gid).toLocaleString()),
}, {
  label: 'Symbol',
  dataKey: 'args.symbol',
  width: 140,
  flexGrow: 1.4,
  cellRenderer: ({ rowData = {} }) => reactVirtualizedCellRenderer(rowData.args?.uiID),
}, {
  label: 'Label',
  dataKey: 'label',
  width: 545,
  flexGrow: 5.4,
  cellRenderer: ({ rowData = {} }) => reactVirtualizedCellRenderer(rowData.label),
}, {
  dataKey: 'cid',
  width: 40,
  flexGrow: 0.4,
  cellRenderer: ({ rowData = {} }) => ( // eslint-disable-line
    <div className='icons-cell'>
      <i
        role='button'
        aria-label='Cancel order'
        tabIndex={0}
        className='icon-cancel'
        onClick={() => {
          cancelOrder(authToken, rowData)
          gaCancelOrder()
        }}
      />
    </div>
  ),
  disableSort: true,
}]
