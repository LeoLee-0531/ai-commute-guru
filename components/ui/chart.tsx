import type * as React from "react"

const Chart = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart">{children}</div>
}

const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-container">{children}</div>
}

const ChartTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    )
  }

  return null
}

const ChartLegend = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-legend">{children}</div>
}

const ChartLegendItem = ({ name, color }: { name: string; color: string }) => {
  return (
    <div className="chart-legend-item">
      <span className="chart-legend-item-color" style={{ backgroundColor: color }}></span>
      <span className="chart-legend-item-text">{name}</span>
    </div>
  )
}

export { Chart, ChartContainer, ChartTooltip, ChartLegend, ChartLegendItem }
