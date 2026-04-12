import { ChatPanel } from './components/ChatPanel'
import { CurrentPlan } from './components/CurrentPlan'
import { EnergyPlan, EnergyPlanUnitRatesDetails } from './components/EnergyPlan'
import { MarketplaceHeader } from './components/MarketplaceHeader'
import { SidebarRail } from './components/SidebarRail'
import { currentPlanMock } from './mocks/currentPlanMock'
import { energyPlanMock, energyPlanUnitRatesMock } from './mocks/energyPlanMock'

function App() {
  return (
    <div className="flex h-dvh min-h-0 overflow-hidden">
      <SidebarRail />
      <main className="bg-surface flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <MarketplaceHeader />
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden pl-10">
          <div className="scrollbar-hide min-h-0 flex-1 overflow-y-auto">
            <div className="flex flex-col items-start gap-6 pb-10">
              <CurrentPlan
                {...currentPlanMock}
                onEdit={() => {
                  alert('Edit plan - future feature')

                  /* integrate with the edit plan page */
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
                onViewRates={() => {
                  /* optional analytics */
                }}
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
                onViewRates={() => {
                  /* optional analytics */
                }}
                onTopPickInfo={() => {
                  alert('Top pick — future feature')
                }}
              />
            </div>
          </div>
        </div>
      </main>
      <ChatPanel />
    </div>
  )
}

export default App
