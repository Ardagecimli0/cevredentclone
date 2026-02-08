import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import '@/lib/i18n';
import Index from "./pages/Index";
import LocalizedDentalPage from "./pages/LocalizedDentalPage";
import NotFound from "./pages/NotFound";
import { localizedSlugs, languages, defaultLanguage } from "./lib/i18n/config";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Language-prefixed routes with localized slugs */}
          {languages.map((lang) => (
            <Route
              key={lang}
              path={`/${lang}/${localizedSlugs[lang]}`}
              element={<LocalizedDentalPage />}
            />
          ))}

          {/* Fallback for just language prefix */}
          {languages.map((lang) => (
            <Route
              key={`${lang}-redirect`}
              path={`/${lang}`}
              element={<Navigate to={`/${lang}/${localizedSlugs[lang]}`} replace />}
            />
          ))}

          {/* Handle legacy English route */}
          <Route
            path="/dental-implant-turkey"
            element={<Navigate to={`/${defaultLanguage}/${localizedSlugs[defaultLanguage]}`} replace />}
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
