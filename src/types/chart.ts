export interface ChartData {
  total: number
  average: number
  quarters: {
    [key: string]: {
      totalByQuarter: number
      foundations: number
      losses?: number
    }
  }
}
