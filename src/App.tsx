import Search from "./components/Search/Search";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header"
import { useHeader } from "./components/Header/hooks/useHeader"
import { Card, CardContent, CardDescription, CardTitle } from "./components/ui/card";
import { apartments } from '@/lib/constants';


const App = () => {
  const { items } = useHeader();
  const firstFiveApartments = apartments.slice(0, 5);

  return (
    <>
      <header>
        <Header items={items} />
      </header>

      <body className="overflow-hidden">
        <div className=" grid grid-cols-none gap-0 auto-rows-auto">
          <div className="top-0 -mt-14 col-span-4 h-[520px] w-screen relative flex justify-center">
            <section className="absolute z-10 flex mt-48 ">
              <Search />
            </section>
            <video className="w-full object-cover" autoPlay loop muted>
              <source src="https://www.donpiso.com/public/videos/home_251022.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="col-span-4 flex gap-4 px-6 mt-6">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
            {firstFiveApartments.map((e: any) => (
              <Card key={e.uuid}>
                <CardContent className="flex flex-col items-center justify-center gap-y-4">
                  <Slider images={e.galeria} price={e.cifras.precio_desde} />
                  <div className="px-4 w-full gap-y-4">
                    <CardTitle className=" text-primary-content text-body-s font-regular ">{e.title}</CardTitle>
                    <CardDescription className="  text-charcoal text-body-s font-regular">{e.direccion}</CardDescription>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="col-span-4 flex gap-4 px-6 mt-6 bg-secondary">
            <div className="flex flex-row justify-between w-full p-6 ">
              <article className="items-center flex justify-center bg-electric-blue-pastel p-3 rounded-lg">
                <a href="https://www.fotocasa.es/es/vivir-en-espana" title="Guía de barrios">
                  <img alt="Guía de barrios" height="32" src="https://frtassets.fotocasa.es/statics/img/home_services_neightborhood_guide_icon.svg" title="Guía de barrios" width="32" className="mx-auto" />
                  Guía de barrios
                </a>
              </article>
              <article className="items-center flex justify-center bg-electric-blue-pastel p-3 rounded-lg">
                <a href="/es/tasacion-online/" title="Valora tu casa">
                  <img alt="Valora tu casa" height="32" src="https://frtassets.fotocasa.es/statics/img/home_services_value_home_icon.svg" title="Valora tu casa" width="32" className="mx-auto" />
                  Valora tu casa
                </a>
              </article>
              <article className="items-center flex justify-center bg-electric-blue-pastel p-3 rounded-lg">
                <a href="https://hipotecas.fotocasa.es/" rel="" title="Calcula tu hipoteca">
                  <img alt="Calcula tu hipoteca" height="32" src="https://frtassets.fotocasa.es/statics/img/home_services_calculate_fee_icon.svg" title="Calcula tu hipoteca" width="32"  className="mx-auto"/>
                  Calcula tu hipoteca
                </a>
              </article>
              <article className="items-center flex justify-center bg-electric-blue-pastel p-3 rounded-lg">
                <a href="https://seguros.fotocasa.es/?utm_source=fotocasa&amp;utm_campaign=entrypoint&amp;utm_medium=home_processes" title="Asegura tu hogar">
                  <img alt="Asegura tu hogar" height="32" src="https://frtassets.fotocasa.es/statics/img/home_services_protect_home_icon.svg" title="Asegura tu hogar" width="32" className="mx-auto" />
                  Asegura tu hogar
                </a>
              </article>
              <article className="items-center flex justify-center bg-electric-blue-pastel p-3 rounded-lg">
                <a href="/es/vende-con-agencia/" rel="" title="Vende con agencia">
                  <img alt="Vende con agencia" height="32" src="https://frtassets.fotocasa.es/statics/img/home_services_sell_with_agency_icon.svg" title="Vende con agencia" width="32" className="mx-auto" />
                  Vende con agencia
                </a>
              </article>
            </div>
          </div>
        </div>
      </body>


      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-blue-500 hover:underline">Facebook</a>
            <a href="#" className="text-blue-500 hover:underline">Twitter</a>
            <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
          </div>
          <p className="mt-4 text-sm text-gray-600">&copy; 2024 Jaune. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default App
