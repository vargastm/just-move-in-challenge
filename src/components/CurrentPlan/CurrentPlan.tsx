import { type ReactNode, useId, useState } from 'react'

import calculatorSvg from '../../assets/calculator.svg'
import checkSvg from '../../assets/check.svg'
import chevronDownSvg from '../../assets/chevron-down.svg'
import infoSvg from '../../assets/info.svg'

export type CurrentPlanProps = {
  planName: string
  supplierLogo?: ReactNode
  supplierLogoSrc: string
  tariff: string
  address: string
  mpan: number
  showExitFeeBanner?: boolean
  usageSummary: number
  estimatedMonthlyElectricityCost: number
  estimatedAnnualElectricityCost: number
  onEdit?: () => void
}

const iconSrc = {
  check: checkSvg,
  calculator: calculatorSvg,
  info: infoSvg,
  chevronDown: chevronDownSvg,
} as const

function IconImg({
  src,
  width,
  height,
  className = '',
}: {
  src: string
  width: number
  height: number
  className?: string
}) {
  return (
    <img
      src={src}
      alt=""
      width={width}
      height={height}
      className={`shrink-0 ${className}`.trim()}
      aria-hidden
      decoding="async"
    />
  )
}

function SupplierLogoImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-[27px] w-auto max-w-[140px] shrink-0 object-contain object-left"
      decoding="async"
    />
  )
}

function DetailBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-primary-border border-t py-2.5 first:border-t-0 first:pt-0">
      <p className="text-text-secondary text-[10px] tracking-wide uppercase">
        {label}
      </p>
      <p className="text-text-secondary text-xs">{value}</p>
    </div>
  )
}

export function CurrentPlan({
  planName,
  supplierLogo,
  supplierLogoSrc,
  tariff,
  address,
  mpan,
  showExitFeeBanner,
  usageSummary,
  estimatedMonthlyElectricityCost,
  estimatedAnnualElectricityCost,
  onEdit,
}: CurrentPlanProps) {
  const [planDetailsOpen, setPlanDetailsOpen] = useState(false)
  const planDetailsPanelId = useId()

  const logo =
    supplierLogo ??
    (supplierLogoSrc ? (
      <SupplierLogoImage src={supplierLogoSrc} alt="" />
    ) : null)

  return (
    <article className="border-primary-border max-w-[556px] rounded-xl border bg-white shadow-sm">
      <div className="pt-3.5 pr-3.5 pl-5.5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-text-primary text-sm font-semibold tracking-tight">
              Current plan
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              {logo}
              <span className="text-text-primary text-sm font-semibold">
                {planName ?? ''}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onEdit}
            disabled={!onEdit}
            className="border-primary-brand text-primary-brand hover:bg-primary-brand/5 focus-visible:ring-primary-brand h-[31px] w-12 rounded-lg border text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Edit
          </button>
        </div>
      </div>

      {showExitFeeBanner ? (
        <div
          className="bg-secondary-green text-primary-green mt-2.5 flex h-8.5 items-center gap-2 px-5 text-xs font-medium"
          role="status"
        >
          <IconImg src={iconSrc.check} width={18} height={18} />
          <span>Your current plan doesn&apos;t have an exit fee</span>
        </div>
      ) : null}

      <div className="border-primary-border grid gap-0 border-t md:grid-cols-2">
        <div className="border-primary-border pt-2.5 pr-2.5 pb-4 pl-5.5 md:border-r">
          <div>
            <DetailBlock label="Tariff" value={tariff} />
            <DetailBlock label="Address" value={address} />
            <DetailBlock label="MPAN" value={mpan} />
          </div>
        </div>

        <div className="px-5.5 pt-2.5 pb-2">
          <div className="text-text-secondary flex items-center gap-2 text-sm font-semibold">
            <IconImg src={iconSrc.calculator} width={15} height={15} />
            <span className="text-xs font-bold">
              Your estimated annual usage
            </span>
            <button
              type="button"
              className="text-text-secondary hover:text-text-primary focus-visible:ring-primary-brand ml-0.5 inline-flex rounded focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:outline-none"
              aria-label="More information about estimated usage"
            >
              <IconImg src={iconSrc.info} width={15} height={15} />
            </button>
          </div>
          <p className="text-text-secondary mt-2.5 flex h-[25px] items-center justify-center gap-1 rounded-lg bg-[#EEEEEE] text-center text-xs font-medium">
            Electricity:
            <span className="font-semibold"> {usageSummary}kWh</span>
          </p>
          <div className="mt-3 flex flex-col items-center gap-1.5">
            <button
              type="button"
              onClick={() => setPlanDetailsOpen((open) => !open)}
              aria-expanded={planDetailsOpen}
              aria-controls={planDetailsPanelId}
              className="text-primary-brand hover:text-primary-brand/80 focus-visible:ring-primary-brand inline-flex items-center gap-1 rounded text-[10px] font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {planDetailsOpen ? 'Hide plan details' : 'Show plan details'}
              <IconImg
                src={iconSrc.chevronDown}
                width={20}
                height={20}
                className={`transition-transform ${planDetailsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {planDetailsOpen ? (
              <div
                id={planDetailsPanelId}
                role="region"
                aria-label="Estimated electricity cost"
                className="border-primary-border w-full max-w-[240px] rounded-2xl border bg-[#F9FAFB] p-4 pb-[9px]"
              >
                <p className="text-text-secondary text-xs font-normal">
                  Est. monthly electricity cost
                </p>
                <p className="text-text-primary text-base leading-tight">
                  <span className="font-bold">
                    £{estimatedMonthlyElectricityCost}
                  </span>
                  <span className="font-medium">/mo</span>
                </p>
                <p className="text-text-secondary text-[10px] font-normal">
                  £{estimatedAnnualElectricityCost}/year
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}
