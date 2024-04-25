import cover from './cover.png'

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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Historia y Misión</h2>
          <p className="mt-4 text-gray-500">
            Nuestra historia comenzó con la idea de hacer que la vida de los estudiantes foráneos fuera más fácil y enriquecedora. En FOFO, nos dedicamos a proporcionar una solución integral que aborda los desafíos específicos que enfrentan los estudiantes que se mudan a la capital en busca de oportunidades educativas en la UCA. Nuestra misión es "Nos dedicamos a simplificar la vida estudiantil de los foráneos al ofrecer una plataforma que combina múltiples funciones esenciales, desde la gestión financiera hasta la socialización y el acceso a recursos útiles.", para que cada estudiante foráneo pueda prosperar en su nueva etapa académica y personal.  </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={cover || externalImageUrl}  // Use the imported cover if available, otherwise use the external URL
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={cover || externalImageUrl}  // Use the imported cover if available, otherwise use the external URL
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={cover || externalImageUrl}  // Use the imported cover if available, otherwise use the external URL
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={cover || externalImageUrl}  // Use the imported cover if available, otherwise use the external URL
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}
