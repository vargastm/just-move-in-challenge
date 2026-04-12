export type EnergyPlanUnitRatesDetailsProps = {
  electricity: { unitRate: string; standingCharge: string }
  gas: { unitRate: string; standingCharge: string }
}

function RatePill({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-secondary-border flex h-[23px] items-center justify-center gap-1 rounded-sm border bg-[#F4F4F4] px-[7.6px]">
      <span className="text-text-primary text-[10px] whitespace-nowrap">
        {label}
      </span>
      <span className="text-text-primary text-[10px] font-bold">{value}</span>
    </div>
  )
}

function RateRow({
  title,
  unitRate,
  standingCharge,
}: {
  title: string
  unitRate: string
  standingCharge: string
}) {
  return (
    <div className="flex flex-col gap-3 py-2.5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:gap-3">
      <p className="w-full shrink-0 text-xs text-[#4B5563] sm:w-[55px]">
        {title}
      </p>
      <div className="flex min-w-0 flex-1 flex-wrap gap-2">
        <RatePill label="Unit rate" value={unitRate} />
        <RatePill label="Standing charge" value={standingCharge} />
      </div>
    </div>
  )
}

export function EnergyPlanUnitRatesDetails({
  electricity,
  gas,
}: EnergyPlanUnitRatesDetailsProps) {
  return (
    <div className="border-primary-border rounded-lg border bg-[#FAFAFA] px-4 py-2.5">
      <RateRow
        title="Electricity"
        unitRate={electricity.unitRate}
        standingCharge={electricity.standingCharge}
      />
      <div className="border-primary-border border-t" />
      <RateRow
        title="Gas"
        unitRate={gas.unitRate}
        standingCharge={gas.standingCharge}
      />
    </div>
  )
}
