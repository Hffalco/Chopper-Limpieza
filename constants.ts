// Placeholders for images - Reemplazar con las URLs reales de las imágenes subidas
export const IMAGES = {
  logo: "https://via.placeholder.com/150x50?text=CHOPPER", // Reemplazar con el logo de Chopper
  products: {
    detergente: "https://picsum.photos/400/400?random=1",
    desengrasante: "https://picsum.photos/400/400?random=2",
    jabonLiquido: "https://picsum.photos/400/400?random=3",
    lavandina: "https://picsum.photos/400/400?random=4",
    suavizante: "https://picsum.photos/400/400?random=5",
    perfumina: "https://picsum.photos/400/400?random=6",
  },
  heroBg: "https://images.unsplash.com/photo-1581553698125-96cb320f9261?auto=format&fit=crop&q=80&w=1000",
};

export const CONTACT_INFO = {
  whatsapp: "5490000000000", // Reemplazar con número real
  whatsappDisplay: "+54 9 000 000 000",
  address: "Av. Siempre Viva 742, San Juan",
  hours: "Lun a Vie: 9:00 - 18:00 | Sáb: 9:00 - 13:00",
  email: "contacto@chopperlimpieza.com.ar",
  mapsLink: "https://maps.google.com/?q=Av+Siempre+Viva+742",
};

export const CATEGORIES = [
  "Todos",
  "Detergentes",
  "Desinfectantes",
  "Ropa",
  "Industrial",
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Detergente Líquido",
    description: "Ultra Espuma - 5 Litros. Ideal para vajilla diaria.",
    category: "Detergentes",
    image: IMAGES.products.detergente,
    badge: "Más vendido",
  },
  {
    id: 2,
    name: "Desengrasante Poder Activo",
    description: "Arranca grasa al instante. Uso industrial y hogar.",
    category: "Industrial",
    image: IMAGES.products.desengrasante,
  },
  {
    id: 3,
    name: "Jabón Líquido",
    description: "Para todo tipo de prendas. Baja espuma.",
    category: "Ropa",
    image: IMAGES.products.jabonLiquido,
  },
  {
    id: 4,
    name: "Lavandina Concentrada",
    description: "Máxima desinfección. Bidón 5 Litros.",
    category: "Desinfectantes",
    image: IMAGES.products.lavandina,
  },
  {
    id: 5,
    name: "Suavizante Premium",
    description: "Fragancia duradera. Suavidad increíble.",
    category: "Ropa",
    image: IMAGES.products.suavizante,
    badge: "Nuevo",
  },
  {
    id: 6,
    name: "Perfumina Concentrada",
    description: "Para pisos y telas. Varios aromas.",
    category: "Desinfectantes",
    image: IMAGES.products.perfumina,
  },
];

export const OFFERS = [
  {
    id: 1,
    title: "Combo Hogar",
    description: "Detergente + Lavandina + Desengrasante",
    discount: "15% OFF",
    price: "$8500",
  },
  {
    id: 2,
    title: "Pack Mayorista",
    description: "Comprando 10 bidones surtidos",
    discount: "Envío Gratis",
    price: "Consultar",
  },
  {
    id: 3,
    title: "Semana del Jabón",
    description: "2x1 en Jabón Líquido 5L",
    discount: "2x1",
    price: "$6000",
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: "María Gonzalez",
    location: "Rivadavia",
    text: "Excelente atención y los productos rinden un montón. El detergente es buenísimo.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Pérez",
    location: "Capital",
    text: "Compro para mi local gastronómico y siempre cumplen con la entrega. Recomendado.",
    rating: 5,
  },
  {
    id: 3,
    name: "Laura D.",
    location: "Santa Lucía",
    text: "Los precios son los mejores de San Juan. Me armaron el pedido por WhatsApp re rápido.",
    rating: 4,
  },
  {
    id: 4,
    name: "Consorcio Las Heras",
    location: "Capital",
    text: "Muy buena calidad en lavandinas y artículos de limpieza general para el edificio.",
    rating: 5,
  },
];