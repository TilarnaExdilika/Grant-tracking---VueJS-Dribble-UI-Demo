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
