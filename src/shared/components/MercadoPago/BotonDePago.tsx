import React, { useEffect } from 'react';

const MercadoPagoButton: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
    script.async = true;
    script.setAttribute('data-preference-id', 'TU_PREFERENCE_ID'); // Reemplaza "TU_PREFERENCE_ID" por el ID de preferencia de pago generado en Mercado Pago

    document.getElementById('mercadopago-button-container')?.appendChild(script);

    return () => {
      document.getElementById('mercadopago-button-container')?.removeChild(script);
    };
  }, []);

  return <div id="mercadopago-button-container" />;
};

export default MercadoPagoButton;
