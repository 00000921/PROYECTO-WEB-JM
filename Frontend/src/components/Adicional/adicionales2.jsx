import compus from './compus.png'

const features = [
    { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Valores y Filosofia</h2>
            <p className="mt-4 text-gray-500">
            En FOFO, nos dedicamos a apoyar a los estudiantes foráneos que estudian o aspiran a estudiar en la Universidad Centroamericana "José Simeón Cañas" (UCA). Nuestra filosofía se basa en:

Apoyo Total: Estamos aquí para ayudar a los estudiantes foráneos en su experiencia en la UCA.
Comunidad Solidaria: Fomentamos la formación de una comunidad donde los estudiantes puedan conectarse y apoyarse.
Diversidad y Respeto: Celebramos la diversidad y promovemos el respeto mutuo.
Ética y Responsabilidad: Operamos con integridad y responsabilidad en todo momento.
Sostenibilidad: Buscamos un crecimiento sostenible para continuar apoyando a futuros estudiantes foráneos.

Nuestra misión es ser un recurso valioso para la comunidad de estudiantes foráneos en la UCA, contribuyendo a su éxito y bienestar.
           </p>
  
  
  
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
          src={compus || externalImageUrl}  // Use the imported cover if available, otherwise use the external URL
          alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
          src={compus || externalImageUrl}  // Use the imported cover if available, otherwise use the external URL
          alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
          src={compus || externalImageUrl}  // Use the imported cover if available, otherwise use the external URL
          alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
          src={compus || externalImageUrl}  // Use the imported cover if available, otherwise use the external URL
          alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }
  