import { Navigate } from 'react-router-dom';
import { defaultLanguage, localizedSlugs } from '@/lib/i18n/config';

const Index = () => {
  // Redirect to default language page
  return <Navigate to={`/${defaultLanguage}/${localizedSlugs[defaultLanguage]}`} replace />;
};

export default Index;
