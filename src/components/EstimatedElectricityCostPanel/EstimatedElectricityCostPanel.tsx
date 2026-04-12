import type { ComponentPropsWithoutRef } from 'react'

export type EstimatedElectricityCostPanelProps = {
  estimatedMonthlyElectricityCost: number
  estimatedAnnualElectricityCost: number
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

export function EstimatedElectricityCostPanel({
  estimatedMonthlyElectricityCost,
  estimatedAnnualElectricityCost,
  ...rest
}: EstimatedElectricityCostPanelProps) {
  const monthly = estimatedMonthlyElectricityCost.toFixed(2)

  return (
    <div
      className="border-primary-border flex w-full max-w-[245px] flex-col rounded-lg border bg-[#F9FAFB] p-4 pt-3 pb-2.5 max-[768px]:max-w-full max-[768px]:flex-row max-[768px]:justify-between"
      {...rest}
    >
      <p className="text-text-secondary text-xs font-normal">
        Est. monthly electricity cost
      </p>
      <div>
        <p className="text-text-primary text-base leading-tight min-[768px]:mt-1">
          <span className="font-bold">£{monthly}</span>
          <span className="font-medium">/mo</span>
        </p>
        <p className="text-text-secondary text-[10px] font-normal">
          £{estimatedAnnualElectricityCost}/year
        </p>
      </div>
    </div>
  )
}
