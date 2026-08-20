import { CarBrandCatalog, CategoryItem, FAQItem, StatItem } from '../types';

export const CAR_CATALOG: CarBrandCatalog[] = [
  {
    brand: "Volkswagen",
    models: [
      { name: "Gol Trend", years: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"], engines: ["1.6 8V MSI", "1.6 16V MSI"] },
      { name: "Amarok", years: ["2010", "2012", "2014", "2016", "2018", "2020", "2022", "2024"], engines: ["2.0 TDI (140 CV)", "2.0 Biturbo (180 CV)", "3.0 V6 TDI (258 CV)"] },
      { name: "Vento", years: ["2011", "2013", "2015", "2017", "2019", "2021", "2023"], engines: ["2.5 5Cyl", "2.0 TSI GLI", "1.4 TSI"] },
      { name: "Suran", years: ["2008", "2010", "2012", "2014", "2016", "2018", "2019"], engines: ["1.6 8V", "1.6 16V"] },
      { name: "Polo", years: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"], engines: ["1.6 MSI", "1.0 TSI GTS"] },
      { name: "Taos", years: ["2021", "2022", "2023", "2024"], engines: ["250 TSI 1.4"] },
      { name: "Fox", years: ["2006", "2008", "2010", "2013", "2016", "2019"], engines: ["1.6 8V"] },
      { name: "Bora", years: ["2005", "2007", "2009", "2011", "2013", "2015"], engines: ["2.0 8V", "1.8 Turbo", "1.9 TDI"] }
    ]
  },
  {
    brand: "Toyota",
    models: [
      { name: "Hilux", years: ["2012", "2014", "2016", "2018", "2020", "2022", "2024"], engines: ["2.5 D-4D", "3.0 D-4D", "2.4 TDI (150 CV)", "2.8 TDI (204 CV)"] },
      { name: "Corolla", years: ["2010", "2012", "2015", "2018", "2020", "2022", "2024"], engines: ["1.8 VVTi", "2.0 Dual VVTi", "1.8 Híbrido"] },
      { name: "Etios", years: ["2013", "2015", "2017", "2019", "2021", "2023"], engines: ["1.5 16V VVTi"] },
      { name: "Yaris", years: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"], engines: ["1.5 16V Dual VVTi"] },
      { name: "Corolla Cross", years: ["2021", "2022", "2023", "2024"], engines: ["2.0 Dynamic Force", "1.8 Híbrido"] },
      { name: "SW4", years: ["2012", "2016", "2020", "2024"], engines: ["2.8 TDI 4x4"] }
    ]
  },
  {
    brand: "Fiat",
    models: [
      { name: "Cronos", years: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"], engines: ["1.3 Firefly", "1.8 E-Torq"] },
      { name: "Palio", years: ["2005", "2008", "2011", "2014", "2016", "2018"], engines: ["1.4 Fire", "1.6 E-Torq"] },
      { name: "Toro", years: ["2016", "2018", "2020", "2022", "2024"], engines: ["1.8 E-Torq", "2.0 Multijet Turbo Diesel", "1.3 Turbo T270"] },
      { name: "Uno / Uno Way", years: ["2008", "2010", "2013", "2016", "2019", "2021"], engines: ["1.3 Fire", "1.4 Fire EVO"] },
      { name: "Strada", years: ["2010", "2013", "2016", "2020", "2022", "2024"], engines: ["1.4 Fire EVO", "1.3 Firefly"] },
      { name: "Mobi", years: ["2016", "2018", "2020", "2022", "2024"], engines: ["1.0 Fire"] },
      { name: "Fiorino", years: ["2008", "2012", "2015", "2018", "2022", "2024"], engines: ["1.3 Fire", "1.4 Fire EVO"] }
    ]
  },
  {
    brand: "Ford",
    models: [
      { name: "Ranger", years: ["2012", "2015", "2018", "2020", "2022", "2024"], engines: ["2.2 TDCi", "3.2 TDCi (200 CV)", "2.0 Turbo Diesel (170 CV)", "3.0 V6 Turbo Diesel"] },
      { name: "Focus", years: ["2008", "2010", "2014", "2016", "2018", "2019"], engines: ["1.6 Sigma", "2.0 Duratec GDI"] },
      { name: "Fiesta Kinetic", years: ["2011", "2013", "2015", "2017", "2019"], engines: ["1.6 Ti-VCT"] },
      { name: "EcoSport", years: ["2008", "2012", "2015", "2018", "2021"], engines: ["1.6 Sigma", "2.0 Duratec", "1.5 Dragon 3Cyl"] },
      { name: "Ka", years: ["2008", "2011", "2016", "2018", "2020"], engines: ["1.0 Zetec Rocam", "1.6 Zetec", "1.5 Dragon"] }
    ]
  },
  {
    brand: "Chevrolet",
    models: [
      { name: "Onix", years: ["2013", "2015", "2017", "2019", "2021", "2023", "2024"], engines: ["1.4 SPE/4", "1.0 Turbo 3Cyl"] },
      { name: "Cruze", years: ["2012", "2014", "2017", "2019", "2021", "2023"], engines: ["1.8 Ecotec", "1.4 Turbo (153 CV)"] },
      { name: "S10", years: ["2012", "2015", "2018", "2021", "2024"], engines: ["2.8 CTDi Turbo Diesel (200 CV)"] },
      { name: "Corsa Classic / Classic", years: ["2004", "2007", "2010", "2013", "2016"], engines: ["1.4 8V MPFI", "1.6 8V"] },
      { name: "Tracker", years: ["2014", "2017", "2020", "2022", "2024"], engines: ["1.8 Ecotec", "1.2 Turbo"] },
      { name: "Spin", years: ["2013", "2016", "2019", "2022", "2024"], engines: ["1.8 8V SPE/4"] }
    ]
  },
  {
    brand: "Peugeot",
    models: [
      { name: "208", years: ["2013", "2016", "2018", "2020", "2022", "2023", "2024"], engines: ["1.5 8V", "1.6 16V VTi", "1.2 PureTech", "1.0 Turbo T200"] },
      { name: "308", years: ["2012", "2015", "2018", "2021"], engines: ["1.6 16V VTi", "2.0 16V", "1.6 THP Turbo", "1.6 HDi Turbo Diesel"] },
      { name: "207 Compact", years: ["2008", "2010", "2012", "2014", "2016"], engines: ["1.4 8V", "1.6 16V", "1.4 HDi"] },
      { name: "Partner", years: ["2008", "2012", "2016", "2020", "2024"], engines: ["1.4 8V", "1.6 16V VTi", "1.6 HDi"] },
      { name: "3008", years: ["2014", "2018", "2021", "2024"], engines: ["1.6 THP 165 CV"] }
    ]
  },
  {
    brand: "Renault",
    models: [
      { name: "Kangoo", years: ["2008", "2012", "2016", "2018", "2021", "2024"], engines: ["1.6 K4M", "1.5 dCi", "1.6 SCe 16V (HR16)"] },
      { name: "Sandero / Stepway", years: ["2008", "2011", "2015", "2018", "2021", "2024"], engines: ["1.6 8V K7M", "1.6 16V K4M", "1.6 16V SCe"] },
      { name: "Duster", years: ["2011", "2014", "2017", "2020", "2022", "2024"], engines: ["1.6 16V", "2.0 16V F4R", "1.3 TCe Turbo"] },
      { name: "Clio / Clio Mio", years: ["2004", "2008", "2012", "2014", "2016"], engines: ["1.2 16V D4F", "1.6 16V K4M"] },
      { name: "Master", years: ["2010", "2014", "2018", "2022"], engines: ["2.3 dCi Turbo Diesel"] }
    ]
  },
  {
    brand: "Citroën",
    models: [
      { name: "C3 / C3 Aircross", years: ["2008", "2013", "2017", "2020", "2023", "2024"], engines: ["1.4 8V", "1.6 16V VTi", "1.2 PureTech", "1.0 Turbo T200"] },
      { name: "Berlingo", years: ["2008", "2012", "2016", "2020", "2024"], engines: ["1.4 8V", "1.6 16V VTi", "1.6 HDi"] },
      { name: "C4 Lounge", years: ["2013", "2016", "2018", "2020"], engines: ["2.0 16V", "1.6 THP Turbo", "1.6 HDi"] }
    ]
  }
];

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: "frenos",
    title: "Frenos y Discos",
    description: "Sistemas de frenado de alta seguridad: discos ventilados, pastillas cerámicas, cintas y bombas.",
    iconName: "Disc",
    popularItems: ["Discos de Freno Ventilados/Sólidos", "Pastillas de Freno Delanteras/Traseras", "Cilindros de Rueda y Bombas", "Líquido de Freno DOT4 / DOT5.1"]
  },
  {
    id: "suspension",
    title: "Tren Delantero y Suspensión",
    description: "Componentes reforzados para estabilidad óptima: amortiguadores, cazoletas, parillas y bujes.",
    iconName: "Activity",
    popularItems: ["Amortiguadores Presurizados Gas/Aceite", "Parrillas y Cazoletas con Crapodina", "Extremos y Bieletas de Dirección", "Bujes de Barra Estabilizadora"]
  },
  {
    id: "distribucion",
    title: "Kit de Distribución",
    description: "Kits completos de sincronización del motor con tensores alemanes, correas y bombas de agua.",
    iconName: "Cog",
    popularItems: ["Correas Dentadas HNBR", "Tensores Autoajustables y Poleas", "Bomba de Agua Reforzada", "Kit Completo con Cadena de Tiempo"]
  },
  {
    id: "embragues",
    title: "Embragues y Crapodinas",
    description: "Kits de embrague bi-masa y mono-masa de máxima transmisión de torque e instalación precisa.",
    iconName: "RotateCw",
    popularItems: ["Placa, Disco y Crapodina Hidráulica", "Volante Motor Bi-Masa / Mono-Masa", "Cable de Embrague Autorregulable", "Horquilla y Guias de Empuje"]
  },
  {
    id: "filtros-aceites",
    title: "Filtros y Aceites",
    description: "Lubricantes sintéticos homologados y kit de filtros de aire, aceite, combustible y habitáculo.",
    iconName: "Droplet",
    popularItems: ["Aceites 5W30, 5W40, 10W40 Sintéticos", "Filtro de Aceite de Alto Flujo", "Filtro de Aire y Combustible Diesel/Nafta", "Filtro de Habitáculo de Carbón Activado"]
  },
  {
    id: "encendido-inyeccion",
    title: "Encendido e Inyección",
    description: "Rendimiento y eficiencia térmica: bujías de iridio, bobinas, inyectores y bombas de nafta.",
    iconName: "Zap",
    popularItems: ["Bujías Iridium y Cables de Encendido", "Bobinas de Encendido Individuales", "Inyectores Nafta/Diesel Common Rail", "Bomba de Combustible Sumergible"]
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: "years",
    value: "100 Años",
    label: "de Experiencia",
    sublabel: "Trayectoria ininterrumpida acompañando al automotor desde 1921",
    iconName: "Award"
  },
  {
    id: "stock",
    value: "+15.000",
    label: "Repuestos en Stock",
    sublabel: "Piezas originales y alternativas certificadas en catálogo",
    iconName: "Boxes"
  },
  {
    id: "guarantee",
    value: "100%",
    label: "Compatibilidad Garantizada",
    sublabel: "Asesoramiento personalizado directo por nuestro equipo especializado",
    iconName: "ShieldCheck"
  },
  {
    id: "attention",
    value: "Atención Directa",
    label: "Lia & Fernando",
    sublabel: "Contacto directo sin intermediarios por WhatsApp",
    iconName: "UserCheck"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "¿Cuáles son los números de atención directa por WhatsApp?",
    answer: "Podés comunicarte directamente con Lia al (3465) 40-6554 o con Fernando al (3465) 66-8730. Ambos responderán tus consultas al instante dentro del horario comercial."
  },
  {
    question: "¿Cuáles son los horarios de atención al público?",
    answer: "Atendemos de Lunes a Viernes de 08:00 a 12:00 hs y de 15:00 a 20:00 hs. Los días Sábados atendemos de 08:00 a 12:00 hs."
  },
  {
    question: "¿Cómo confirman la compatibilidad del repuesto con mi vehículo?",
    answer: "Nuestro equipo cuenta con 100 Años de Experiencia y catálogos de piezas oficiales. Al indicarnos la marca, modelo, año y motorización de tu vehículo, verificamos la pieza exacta correspondiente."
  },
  {
    question: "¿Cuáles son las formas de pago aceptadas?",
    answer: "Aceptamos Transferencia Bancaria, Mercado Pago, Tarjetas de Crédito y Efectivo."
  }
];

export const TRUST_POINTS = [
  { icon: "Award", title: "100 Años de Experiencia", desc: "Trayectoria centenaria desde 1921 en Bombal, Santa Fe" },
  { icon: "Shield", title: "Garantía de Fábrica", desc: "Garantía oficial directa en todas las piezas" },
  { icon: "FileText", title: "Factura A y B", desc: "Emitimos comprobantes fiscales oficiales" },
  { icon: "PhoneCall", title: "Atención Personalizada", desc: "Consultá directo con Lia o Fernando por WhatsApp" }
];
