import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./assets/style/style.scss";
import reportWebVitals from "./reportWebVitals";
import { registerIcons } from "./config/fa.config";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// Проверка первого посещения и перезагрузка при необходимости
const FIRST_VISIT_KEY = "react_app_first_visit";
const RELOAD_FLAG_KEY = "react_app_reloading";

try {
  // Проверяем, не идет ли уже перезагрузка (защита от бесконечного цикла)
  const isReloading = sessionStorage.getItem(RELOAD_FLAG_KEY);
  
  if (isReloading) {
    // Перезагрузка уже была, очищаем флаг
    sessionStorage.removeItem(RELOAD_FLAG_KEY);
  } else {
    // Проверяем, первый ли это визит
    const hasVisited = localStorage.getItem(FIRST_VISIT_KEY);
    
    if (!hasVisited) {
      // Первый визит - устанавливаем флаги и перезагружаем страницу через 3 секунды
      localStorage.setItem(FIRST_VISIT_KEY, "true");
      sessionStorage.setItem(RELOAD_FLAG_KEY, "true");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      // Код после reload не выполнится, что правильно
    }
  }
} catch (e) {
  // Если localStorage недоступен (инкогнито режим и т.д.), просто продолжаем работу
  console.warn("localStorage недоступен, пропускаем проверку первого посещения");
}

// Unregister any existing service workers immediately to prevent blocking JS on first visit
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
    }
  });
  // Also unregister using the service worker registration utility
  serviceWorkerRegistration.unregister();
}

registerIcons();

const appElement = (
  <BrowserRouter>
    <HelmetProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </HelmetProvider>
  </BrowserRouter>
);

const container = document.getElementById("root") as HTMLElement;
const hasChildNodes = container?.hasChildNodes() ?? false;

hasChildNodes
  ? hydrateRoot(container, appElement)
  : createRoot(container).render(appElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
