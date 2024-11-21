export interface FinancialChartData {
  total: number
  average: number
  quarters: {
    [key: string]: {
      totalByQuarter: number
      foundations: number
      corporations: number
      losses: number
    }
  }
}

export interface PieChartData {
  total: number
  areas: {
    name: string
    value: number
    color: string
  }[]
}

export interface BalanceChartData {
  total: number
  average: number
  periods: {
    [key: string]: {
      committed: number
      balanceActual: number
      balanceBasic: number
      percentageChange: string
    }
  }
  legend: {
    committed: LegendItem
    balanceActual: LegendItem
    balanceBasic: LegendItem
  }
}

interface LegendItem {
  name: string
  color: string
}
