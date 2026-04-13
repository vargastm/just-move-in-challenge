import { Link } from 'react-router-dom'

import { CurrentPlan } from '../components/CurrentPlan'
import {
  EnergyPlan,
  EnergyPlanUnitRatesDetails,
} from '../components/EnergyPlan'
import { currentPlanMock } from '../mocks/currentPlanMock'
import {
  energyPlanMock,
  energyPlanUnitRatesMock,
} from '../mocks/energyPlanMock'

export function ComponentsPage() {
  return (
    <div className="flex h-dvh min-h-0 flex-col gap-8 overflow-y-auto bg-white px-6 py-8">
      <header className="flex items-center justify-between gap-4 border-b border-zinc-200 pb-4">
        <h1 className="text-lg font-semibold text-zinc-900">
          Components gallery
        </h1>
        <Link
          to="/"
          className="text-sm font-medium text-violet-700 underline-offset-4 hover:underline"
        >
          ← Marketplace
        </Link>
      </header>
      <div className="flex flex-1 flex-wrap items-center justify-center gap-10 max-[1200px]:flex-col">
        <CurrentPlan
          {...currentPlanMock}
          onEdit={() => {
            alert('Edit plan - future feature')
          }}
        />
        <EnergyPlan
          {...energyPlanMock}
          ratesDetails={
            <EnergyPlanUnitRatesDetails {...energyPlanUnitRatesMock} />
          }
          onChoosePlan={() => {
            alert('Choose plan - future feature')
          }}
          onViewRates={() => {}}
          onTopPickInfo={() => {
            alert('Top pick — future feature')
          }}
        />
        <EnergyPlan
          {...energyPlanMock}
          ratesDetails={
            <EnergyPlanUnitRatesDetails {...energyPlanUnitRatesMock} />
          }
          onChoosePlan={() => {
            alert('Choose plan - future feature')
          }}
          onViewRates={() => {}}
          onTopPickInfo={() => {
            alert('Top pick — future feature')
          }}
          isTopPick
        />

        <EnergyPlan
          {...energyPlanMock}
          ratesDetails={
            <EnergyPlanUnitRatesDetails {...energyPlanUnitRatesMock} />
          }
          onChoosePlan={() => {
            alert('Choose plan - future feature')
          }}
          onViewRates={() => {}}
          onTopPickInfo={() => {
            alert('Top pick — future feature')
          }}
          ctaVariant="dual"
          onShowOtherPlans={() => {
            alert('Show other plans - future feature')
          }}
        />
      </div>
    </div>
  )
}
