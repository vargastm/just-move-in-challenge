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
    <div className="flex min-h-screen items-center justify-center gap-10 bg-white px-6 py-12 max-[1200px]:flex-col">
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
    </div>
  )
}
