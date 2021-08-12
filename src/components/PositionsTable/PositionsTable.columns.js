/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { PrettyValue } from '@ufx-ui/core'
import { defaultCellRenderer } from '../../util/ui'
import { PRICE_SIG_FIGS } from '../../constants/precision'

const STYLES = {
  rightAlign: { justifyContent: 'flex-end' },
}

export default ({ authToken, closePosition }) => [{
  label: 'Pair',
  dataKey: 'symbol',
  width: 145,
  flexGrow: 1.5,
  cellRenderer: ({ rowData = {} }) => defaultCellRenderer(rowData.uiID),
}, {
  label: 'Amount',
  dataKey: 'amount',
  width: 160,
  flexGrow: 1.6,
  headerStyle: STYLES.rightAlign,
  style: STYLES.rightAlign,
  cellRenderer: ({ rowData = {} }) => defaultCellRenderer(
    <PrettyValue
      value={rowData?.amount}
      decimals={6}
      fadeTrailingZeros
      strike={0}
    />,
  ),
}, {
  label: 'Base Price',
  dataKey: 'basePrice',
  width: 130,
  flexGrow: 1.3,
  headerStyle: STYLES.rightAlign,
  style: STYLES.rightAlign,
  cellRenderer: ({ rowData = {} }) => defaultCellRenderer(
    <PrettyValue
      value={rowData?.basePrice}
      decimals={8}
      fadeTrailingZeros
    />,
  ),
}, {
  label: 'Liq Price',
  dataKey: 'liquidationPrice',
  width: 100,
  flexGrow: 1,
  headerStyle: STYLES.rightAlign,
  style: STYLES.rightAlign,
  cellRenderer: ({ rowData = {} }) => defaultCellRenderer(
    <PrettyValue
      value={rowData?.liquidationPrice}
      sigFig={PRICE_SIG_FIGS}
      fadeTrailingZeros
    />,
  ),
}, {
  label: 'P/L',
  dataKey: 'pl',
  width: 100,
  flexGrow: 1,
  headerStyle: STYLES.rightAlign,
  style: STYLES.rightAlign,
  cellRenderer: ({ rowData = {} }) => defaultCellRenderer(
    <PrettyValue
      value={rowData?.pl}
      decimals={3}
      fadeTrailingZeros
      strike={0}
    />,
  ),
}, {
  label: 'P/L %',
  dataKey: 'plPerc',
  width: 70,
  flexGrow: 0.7,
  headerStyle: STYLES.rightAlign,
  style: STYLES.rightAlign,
  cellRenderer: ({ rowData = {} }) => defaultCellRenderer(
    <PrettyValue
      value={rowData?.plPerc || 0}
      decimals={2}
      strike={0}
    />,
  ),
}, {
  label: 'Funding Cost',
  dataKey: 'marginFunding',
  width: 100,
  flexGrow: 1,
  headerStyle: STYLES.rightAlign,
  style: STYLES.rightAlign,
  cellRenderer: ({ rowData = {} }) => defaultCellRenderer(
    <PrettyValue
      value={rowData?.marginFunding}
      fadeTrailingZeros
      strike={0}
      decimals={3}
    />,
  ),
}, {
  dataKey: 'order_cid',
  width: 50,
  flexGrow: 0.5,
  cellRenderer: ({ rowData = {} }) => ( // eslint-disable-line
    <div className='icons-cell'>
      <i
        role='button'
        aria-label='Remove position'
        tabIndex={0}
        className='icon-cancel'
        onClick={() => closePosition(authToken, rowData)}
      />
    </div>
  ),
  disableSort: true,
}]
