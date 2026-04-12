import { ChatPanel } from './components/ChatPanel'
import { CurrentPlan } from './components/CurrentPlan'
import { EnergyPlan, EnergyPlanUnitRatesDetails } from './components/EnergyPlan'
import { MarketplaceHeader } from './components/MarketplaceHeader'
import { SidebarRail } from './components/SidebarRail'
import { currentPlanMock } from './mocks/currentPlanMock'
import { energyPlanMock, energyPlanUnitRatesMock } from './mocks/energyPlanMock'

function App() {
  return (
    <div className="flex min-h-screen">
      <SidebarRail />
      <main className="bg-surface flex min-h-screen min-w-0 flex-1 flex-col">
        <MarketplaceHeader />
        <div className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-12">
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
        </div>
      </main>
      <ChatPanel />
    </div>
  )
}

export default App
