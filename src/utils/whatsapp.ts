import { VehicleData } from '../types';

export const CONTACTS = {
  lia: {
    name: 'Lia',
    phone: '3465 40 6554',
    waNumber: '5493465406554',
  },
  fernando: {
    name: 'Fernando',
    phone: '3465 66 8730',
    waNumber: '5493465668730',
  },
};

/**
 * Genera el enlace de WhatsApp preformateado para cotización de repuestos
 */
export const buildWhatsAppUrl = (
  data: Partial<VehicleData>, 
  contactKey: 'lia' | 'fernando' = 'lia'
): string => {
  const targetContact = CONTACTS[contactKey] || CONTACTS.lia;
  const cleanParts: string[] = [`👋 *Hola ${targetContact.name} (Sbrolla Repuestos), necesito cotizar lo siguiente:*`];

  if (data.brand || data.model) {
    const brandModel = `${data.brand || ""} ${data.model || ""}`.trim();
    const yearStr = data.year ? `Año ${data.year}` : "Año S/D";
    const engineStr = data.engine ? ` - Motor ${data.engine}` : "";
    cleanParts.push(`🚘 *Vehículo:* ${brandModel} (${yearStr}${engineStr})`);
  }
  
  if (data.partCategory) {
    cleanParts.push(`⚙️ *Categoría:* ${data.partCategory}`);
  }
  
  if (data.description) {
    cleanParts.push(`📝 *Detalle del repuesto:* ${data.description}`);
  }
  
  cleanParts.push("\n¿Tienen stock y precio disponible?");
  
  const text = encodeURIComponent(cleanParts.join("\n"));
  return `https://wa.me/${targetContact.waNumber}?text=${text}`;
};
