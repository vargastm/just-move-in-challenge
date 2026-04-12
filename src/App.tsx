import { ChatPanel } from './components/ChatPanel'
import { CurrentPlan } from './components/CurrentPlan'
import { EnergyPlan, EnergyPlanUnitRatesDetails } from './components/EnergyPlan'
import { MarketplaceHeader } from './components/MarketplaceHeader'
import { SidebarRail } from './components/SidebarRail'
import { currentPlanMock } from './mocks/currentPlanMock'
import { energyPlanMock, energyPlanUnitRatesMock } from './mocks/energyPlanMock'

function App() {
  return (
    <div className="flex h-dvh min-h-0 overflow-hidden bg-zinc-100 md:bg-white">
      <SidebarRail />
      <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-zinc-100 md:bg-white">
        <MarketplaceHeader />
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-4 md:px-0 md:pl-10">
          <div className="scrollbar-hide min-h-0 flex-1 overflow-y-auto">
            <div className="flex flex-wrap items-start gap-6 pb-10">
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
                isTopPick
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
