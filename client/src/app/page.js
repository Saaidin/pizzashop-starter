// import components
import Pizza from "./components/Pizza"
import Banner from "./components/Banner"
import { pizzas } from "../data/data"

export default function Home() {
  return (
    <section>
      <div className="container mx-auto">
        {/* pizza grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[15px] py-12">
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />
          })}
        </div>
      </div>
    </section>
  )
}
