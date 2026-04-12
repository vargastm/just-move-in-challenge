import { type ReactNode, useId, useState } from 'react'

import bcorpSvg from '../../assets/bcorp.svg'
import chevronDownSvg from '../../assets/chevron-down.svg'
import infoSvg from '../../assets/info.svg'
import leafSvg from '../../assets/leaf.svg'
import trophySvg from '../../assets/trophy.svg'
import { EstimatedElectricityCostPanel } from '../EstimatedElectricityCostPanel'

export type EnergyPlanCtaVariant = 'single' | 'dual'

export type EnergyPlanProps = {
  savingsBannerText?: string
  isTopPick?: boolean
  planName: string
  supplierLogo?: ReactNode
  supplierLogoSrc?: string
  contractMonthsLabel: string
  planTypeTag?: string
  showBCorpBadge?: boolean
  renewablePercent?: number
  estimatedMonthlyElectricityCost: number
  estimatedAnnualElectricityCost: number
  ratesDetails?: ReactNode
  ctaVariant?: EnergyPlanCtaVariant
  primaryCtaLabel?: string
  secondaryCtaLabel?: string
  onChoosePlan?: () => void
  onShowOtherPlans?: () => void
  onViewRates?: () => void
  onTopPickInfo?: () => void
}

const iconSrc = {
  chevronDown: chevronDownSvg,
  leaf: leafSvg,
  bcorp: bcorpSvg,
  info: infoSvg,
  trophy: trophySvg,
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

function EnergyPlanBadge({
  icon,
  children,
}: {
  icon: ReactNode
  children: ReactNode
}) {
  return (
    <div
      className={[
        'bg-secondary-blue border-secondary-border flex h-[21px] items-center justify-center gap-1 rounded-[3px] border px-[5px] max-[768px]:w-max',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {icon}
      <span className="text-text-primary text-[10px] font-bold">
        {children}
      </span>
    </div>
  )
}

export function EnergyPlan({
  savingsBannerText,
  isTopPick,
  planName,
  supplierLogo,
  supplierLogoSrc,
  contractMonthsLabel,
  planTypeTag,
  showBCorpBadge,
  renewablePercent,
  estimatedMonthlyElectricityCost,
  estimatedAnnualElectricityCost,
  ratesDetails,
  ctaVariant = 'single',
  primaryCtaLabel = 'Lock in with British Gas',
  secondaryCtaLabel = 'Show me other plans',
  onChoosePlan,
  onShowOtherPlans,
  onViewRates,
  onTopPickInfo,
}: EnergyPlanProps) {
  const [ratesOpen, setRatesOpen] = useState(false)
  const ratesPanelId = useId()
  const expandable = ratesDetails !== undefined

  const logo =
    supplierLogo ??
    (supplierLogoSrc ? (
      <SupplierLogoImage src={supplierLogoSrc} alt="" />
    ) : null)

  return (
    <article className="border-primary-border w-full max-w-[556px] overflow-hidden rounded-xl border bg-white shadow-sm md:w-[556px]">
      {savingsBannerText ? (
        <div
          className="text-text-primary flex min-h-9 items-center justify-center px-4 py-2 text-center text-xs font-bold"
          style={{ backgroundColor: '#FCE88D' }}
          role="status"
        >
          {savingsBannerText}
        </div>
      ) : null}

      <div className="mt-[5px] grid grid-cols-1 gap-0 max-[768px]:mt-0 md:grid-cols-[267px_289px]">
        <div className="border-primary-border flex flex-col gap-2.5 pt-4.5 pr-4 pb-4 pl-5.5 max-[768px]:pt-3 max-[768px]:pb-0 md:border-r">
          {isTopPick ? (
            <div className="flex items-center justify-between gap-3">
              <div className="bg-primary-blue flex h-[27px] w-max max-w-full items-center gap-2 rounded-full pr-4.5 pl-2">
                <IconImg src={iconSrc.trophy} width={14} height={14} />
                <span className="text-[12px] font-medium text-[#1B0025]">
                  Top pick
                </span>
              </div>
              <button
                type="button"
                onClick={onTopPickInfo}
                className="text-text-secondary hover:text-text-primary focus-visible:ring-primary-brand inline-flex shrink-0 rounded-full focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:outline-none"
                aria-label="More information about this plan"
              >
                <IconImg src={iconSrc.info} width={15} height={15} />
              </button>
            </div>
          ) : null}
          <div className="flex flex-wrap items-center gap-2">
            {logo}
            <h2 className="text-text-primary text-lg font-bold tracking-tight">
              {planName}
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-text-secondary text-[11.5px]">
              {contractMonthsLabel}
            </p>
            {planTypeTag ? (
              <span className="text-text-primary flex h-6 w-[73px] items-center justify-center rounded-md bg-[#F4F4F5] text-xs font-bold tracking-wide">
                {planTypeTag}
              </span>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-[5px]">
            {showBCorpBadge ? (
              <EnergyPlanBadge
                icon={
                  <IconImg src={iconSrc.bcorp} width={11.25} height={9.75} />
                }
              >
                B-Corp certified
              </EnergyPlanBadge>
            ) : null}
            {renewablePercent != null ? (
              <EnergyPlanBadge
                icon={<IconImg src={iconSrc.leaf} width={12} height={12} />}
              >
                {Number.isInteger(renewablePercent)
                  ? renewablePercent
                  : renewablePercent.toFixed(1)}
                % renewable
              </EnergyPlanBadge>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 px-5.5 pt-[9px]">
          <EstimatedElectricityCostPanel
            estimatedMonthlyElectricityCost={estimatedMonthlyElectricityCost}
            estimatedAnnualElectricityCost={estimatedAnnualElectricityCost}
          />
          {ctaVariant === 'dual' ? (
            <div className="flex w-full flex-col gap-2">
              <button
                type="button"
                onClick={onChoosePlan}
                disabled={!onChoosePlan}
                className="bg-primary-brand hover:bg-primary-brand/90 focus-visible:ring-primary-brand h-[33px] w-full rounded-lg text-xs font-medium text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                {primaryCtaLabel}
              </button>
              <button
                type="button"
                onClick={onShowOtherPlans}
                disabled={!onShowOtherPlans}
                className="border-primary-brand text-primary-brand hover:bg-primary-brand/5 focus-visible:ring-primary-brand h-[33px] w-full rounded-lg border bg-white text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                {secondaryCtaLabel}
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onChoosePlan}
              disabled={!onChoosePlan}
              className="bg-primary-brand hover:bg-primary-brand/90 focus-visible:ring-primary-brand h-[33px] w-full rounded-lg text-xs font-medium text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              Choose plan
            </button>
          )}
        </div>
      </div>

      <div>
        <button
          type="button"
          onClick={() => {
            onViewRates?.()
            if (expandable) setRatesOpen((o) => !o)
          }}
          aria-expanded={expandable ? ratesOpen : undefined}
          aria-controls={expandable ? ratesPanelId : undefined}
          className="text-primary-brand hover:text-primary-brand/80 focus-visible:ring-primary-brand flex w-full items-center justify-between gap-3 px-5.5 py-3 text-left text-sm text-[9.5px] font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <span>
            {expandable
              ? ratesOpen
                ? 'Hide unit rates and standing charges'
                : 'View unit rates and standing charges'
              : 'View unit rates and standing charges'}
          </span>
          <IconImg
            src={iconSrc.chevronDown}
            width={20}
            height={20}
            className={
              expandable && ratesOpen
                ? 'rotate-180 transition-transform'
                : 'transition-transform'
            }
          />
        </button>
        {expandable && ratesOpen ? (
          <div
            id={ratesPanelId}
            role="region"
            aria-label="Unit rates and standing charges"
            className="text-text-secondary px-5.5 pb-4 text-xs"
          >
            {ratesDetails}
          </div>
        ) : null}
      </div>
    </article>
  )
}
