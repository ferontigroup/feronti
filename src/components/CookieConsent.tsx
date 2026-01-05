import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-secondary border-t border-white/10">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-dark text-center sm:text-left">
            Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{' '}
            <Link to="/politica-privacidade" className="text-primary hover:underline">
              Política de Privacidade
            </Link>{' '}
            e{' '}
            <Link to="/politica-cookies" className="text-primary hover:underline">
              Política de Cookies
            </Link>.
          </p>
          <Button onClick={handleAccept} className="shrink-0">
            OK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
