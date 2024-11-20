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
