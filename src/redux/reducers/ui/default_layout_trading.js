import { tradingTerminal } from '../../../constants/routes'

export default {
  routePath: tradingTerminal.path,
  canDelete: false,
  isDefault: true,
  savedAt: 0,
  layout: [
    {
      w: 26,
      h: 8,
      minW: 20,
      minH: 4,
      x: 0,
      y: 0,
      i: '1591873294960000',
      moved: false,
      static: false,
      c: 'EXCHANGE_INFO_BAR',
    }, {
      w: 26,
      h: 13,
      minW: 16,
      minH: 6,
      x: 0,
      y: 8,
      i: '1591873294961000',
      moved: false,
      static: false,
      c: 'ORDER_FORM',
    }, {
      w: 49,
      h: 11,
      minW: 30,
      minH: 8,
      x: 26,
      y: 0,
      i: '1591873294962000',
      moved: false,
      static: false,
      c: 'CHART',
    }, {
      w: 25,
      h: 7,
      minW: 21,
      minH: 5,
      x: 75,
      y: 0,
      i: '1591873324466000',
      moved: false,
      static: false,
      c: 'ORDER_BOOK',
    }, {
      w: 49,
      h: 10,
      minW: 32,
      minH: 5,
      x: 26,
      y: 11,
      i: '1591873390469000',
      moved: false,
      static: false,
      c: 'TRADING_STATE_PANEL',
    }, {
      w: 25,
      h: 7,
      minW: 18,
      minH: 4,
      x: 75,
      y: 6,
      i: '1591961760845000',
      moved: false,
      static: false,
      c: 'TRADES_TABLE',
    }, {
      w: 25,
      h: 7,
      minW: 21,
      minH: 5,
      x: 75,
      y: 12,
      i: '1591961781970000',
      moved: false,
      static: false,
      c: 'ORDER_HISTORY_TABLE',
    },
  ],
}
