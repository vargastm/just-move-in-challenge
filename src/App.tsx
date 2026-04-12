import { CurrentPlan } from './components/CurrentPlan'
import { currentPlanMock } from './mocks/currentPlanMock'

function App() {
  return (
    <div className="flex min-h-screen">
      <main className="bg-surface flex min-h-screen min-w-0 flex-1 flex-col items-center justify-center">
        <CurrentPlan
          {...currentPlanMock}
          onEdit={() => {
            /* integrate with the edit plan page */
            alert('Edit plan - future feature')
          }}
          onViewPlanDetails={() => {
            /* integrate with the plan details page */
          }}
        />
      </main>
    </div>
  )
}

export default App
