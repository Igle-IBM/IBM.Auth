// mytoastservice.ts
import { ToastSeverity } from 'primevue/api';
import { app } from '../main';

const lifetime = 3000;

export function handleInfo(title: string = 'i am title', body: string = 'i am body'): void {
  app.config.globalProperties.$toast.add({severity: "info", summary: title, detail: body, life: lifetime});
};

export function handleError(body: string = 'Ocurrio un error'): void {
  app.config.globalProperties.$toast.add({severity: "error", summary: 'Error', detail: body, life: lifetime});
};