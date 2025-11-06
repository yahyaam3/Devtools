# 🎓 TUTORIAL VISUAL: CONECTAR GOOGLE ADSENSE Y VER ESTADÍSTICAS

## PARTE 1: CREAR CUENTA ADSENSE

### Paso 1: Abrir Google AdSense
```
URL: https://adsense.google.com
```

Verás:
```
┌──────────────────────────────────────────────────┐
│  GOOGLE ADSENSE                                  │
│  ┌────────────────────────────────────────────┐ │
│  │ Google AdSense te ayuda a ganar dinero...  │ │
│  │                                             │ │
│  │           [EMPEZAR AHORA] (botón azul)     │ │
│  └────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────┘
```

**Haz clic en "EMPEZAR AHORA"**

---

### Paso 2: Iniciar Sesión Google
```
Inicia con tu cuenta Google personal
(Gmail que usas normalmente)
```

Si no tienes Google:
- Crea una en: https://accounts.google.com/signup

---

### Paso 3: Información Personal
Rellena:
- ✅ País: España (o tu país)
- ✅ Zona horaria: Europa/Madrid
- ✅ Acepta términos (checkbox)
- ✅ Click en "Crear"

---

### Paso 4: Agregar Tu Sitio
```
Menú izquierdo → "Sitios"
  ↓
"Agregar sitio" (botón azul)
  ↓
Pega URL: https://tudominio.com
  ↓
"Agregar sitio"
```

---

### Paso 5: Verificar Dominio
Google mostrará código para verificar que es tu sitio:

**OPCIÓN A: Meta tag (más fácil)**
```html
<meta name="google-site-verification" content="XXXXX" />
```

Copia este código y pégalo en tu `index.html` dentro de `<head>`:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="google-site-verification" content="XXXXX" />
    <!-- Resto de meta tags -->
  </head>
```

Luego:
1. Haz deploy (Netlify/Vercel)
2. En AdSense, haz clic en "VERIFICAR"
3. Google comprobará el meta tag

**OPCIÓN B: Archivo HTML**
1. Descarga archivo `google____.html`
2. Subirlo a raíz del dominio
3. En AdSense, click en "VERIFICAR"

---

### Paso 6: Esperar Verificación
```
Google tardará 24-48 horas

Estado: ⏳ Pendiente
  → Verificando...
  → ✅ Verificado (cuando sea)
```

Recibirás email cuando esté confirmado.

---

## PARTE 2: OBTENER CA ID

### Una vez verificado:

1. **Configuración** (engranaje abajo izquierda)
   ```
   ⚙️ Configuración
   ```

2. **Información de la cuenta**
   ```
   Información de la cuenta
   ```

3. **Busca "ID de publicador"**
   ```
   ID de publicador: ca-pub-1234567890123456
                     ↑
                  COPIA ESTO
   ```

Este es tu **CA ID** - lo usarás para mostrar ads.

---

## PARTE 3: CREAR ANUNCIOS (SLOTS)

### En el menú izquierdo:

```
📌 Anuncios (o "Ad Codes")
  ├── Por bloques
  ├── En artículos
  └── En feed
```

### Haz clic en "Por bloques" (Display Ads):

```
"Por bloques" → "CREAR ANUNCIO"
```

Google te dará:
- Slot ID (número largo)
- Código HTML (por si lo necesitas)

**Ejemplo de Slot ID:**
```
1234567890
```

**Copia este número**

---

## PARTE 4: INTEGRAR EN DEVTOOLSPRO

### Archivo 1: AdSense.jsx
Abre: `src/components/AdSense.jsx`

**Reemplaza línea 12:**
```javascript
// ANTES:
script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXX'

// DESPUÉS (con tu CA ID):
script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456'
```

**Reemplaza línea 23:**
```javascript
// ANTES:
data-ad-client="ca-pub-XXXXXXX"

// DESPUÉS (con tu CA ID):
data-ad-client="ca-pub-1234567890123456"
```

### Archivo 2: App.jsx
Abre: `src/App.jsx`

Busca líneas ~105 y ~120:

```javascript
// ANTES:
<AdSense adSlot="1234567890" format="auto" />

// DESPUÉS (con tu Slot ID):
<AdSense adSlot="1234567890" format="auto" />
```

---

## PARTE 5: VER ESTADÍSTICAS EN ADSENSE

### Dashboard Principal

```
https://adsense.google.com/
```

Cuando hagas login, verás:

```
┌─────────────────────────────────────────────────┐
│             GOOGLE ADSENSE                      │
│                                                 │
│  MENÚ IZQUIERDO:                               │
│  ┌──────────────────┐                          │
│  │ 📌 Resumen       │  ← Verás aquí           │
│  │ 📊 Informes      │     earnings hoy        │
│  │ 📢 Anuncios      │                         │
│  │ 🌐 Sitios        │                         │
│  │ ⚙️ Configuración │                         │
│  └──────────────────┘                         │
│                                                 │
│  CONTENIDO PRINCIPAL:                          │
│  ┌─────────────────────────────────────────┐  │
│  │  💰 EARNINGS HOY: $12.50                │  │
│  │  📈 ÚLTIMOS 7 DÍAS: $87.30              │  │
│  │  📊 ESTE MES: $342.15                   │  │
│  │                                         │  │
│  │  [Gráfico de tendencias]                │  │
│  │  [Período: Nov 1-6, 2025]               │  │
│  └─────────────────────────────────────────┘  │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

### Haz Clic en "INFORMES"

```
Menú izquierdo → "INFORMES"
```

Verás:

```
┌────────────────────────────────────────────────┐
│ INFORMES                                       │
├────────────────────────────────────────────────┤
│                                                │
│  FILTROS (arriba):                            │
│  [📅 Fechas] [📊 Tipo] [🌍 País] [📱 Móvil]  │
│                                                │
│  TABLA DE DATOS:                              │
│  ┌──────────────────────────────────────────┐ │
│  │ Earnings:     $342.15                   │ │
│  │ Impresiones:  45,230                    │ │
│  │ Clicks:       2,154                     │ │
│  │ CTR:          4.76%                     │ │
│  │ CPM:          $7.56                     │ │
│  │ RPM:          $6.20                     │ │
│  └──────────────────────────────────────────┘ │
│                                                │
│  GRÁFICO:                                     │
│  (Línea mostrando tendencia de earnings)     │
│                                                │
└────────────────────────────────────────────────┘
```

---

## PARTE 6: ENTENDER LAS MÉTRICAS

```
┌────────────────────────────────────────────────┐
│ MÉTRICA       SIGNIFICADO          IMPORTANCIA │
├────────────────────────────────────────────────┤
│ Earnings      Dinero que ganaste   💰💰💰      │
│ Impresiones   Veces que se mostró  📊         │
│ Clicks        Clics en anuncios    📌         │
│ CTR           % de clics           📈         │
│ CPM           $ por 1000 impr.     💵         │
│ RPM           $ efectivos          ✅         │
└────────────────────────────────────────────────┘
```

---

## PARTE 7: FILTROS DISPONIBLES

Haz clic en los botones para filtrar:

### 📅 Cambiar Fechas
```
Hoy, Ayer, Últimos 7 días, Mes actual, Año, Personalizado
```

### 🌍 Por País
```
Muestra de dónde vienen los clics
(USA, España, Reino Unido, etc.)
```

### 📱 Por Dispositivo
```
Desktop, Móvil, Tablet
```

### 🔗 Por URL
```
Qué página de tu sitio genera más dinero
```

### 📌 Por Tipo de Ad
```
Display, Texto, Nativo, etc.
```

---

## PARTE 8: EJEMPLO COMPLETO

### Lunes 6 de Noviembre, 2025

```
┌────────────────────────────────────────────────┐
│ ANALYTICS DEVTOOLSPRO                          │
├────────────────────────────────────────────────┤
│                                                │
│ Fecha: Nov 6, 2025                             │
│ Visitantes: 245                                │
│ Impresiones ads: 450                           │
│ Clicks: 18                                     │
│                                                │
│ MÉTRICAS:                                      │
│ • CTR: 18 ÷ 450 = 4%                           │
│ • CPM: Earnings ÷ (Impressions ÷ 1000)        │
│ • Earnings: $12.50                             │
│                                                │
│ INTERPRETACIÓN:                                │
│ ✅ Buen CTR (4% > 2%)                         │
│ ✅ Buen CPM (~$27)                            │
│ ✅ Audiencia de calidad (devs)                │
│                                                │
└────────────────────────────────────────────────┘
```

---

## PARTE 9: MOBILE APP

También puedes ver todo desde el móvil:

### Descarga:
- **iPhone**: App Store → "Google AdSense"
- **Android**: Google Play → "Google AdSense"

### Verás:
- ✅ Earnings en tiempo real
- ✅ Gráficos
- ✅ Alertas
- ✅ Todo desde tu teléfono

---

## PARTE 10: PAGOS

### Cuándo recibes dinero:

```
1. AdSense espera a $100 USD
2. Pago se procesa día 21-26 del mes
3. Recibirás en: Cuenta bancaria o TransferWise

Ejemplo:
Nov: $87.50 (no llega a $100, se acumula)
Dic: $215.30 (total: $302.80)
    → 21-26 Dic, recibes $300 USD
    → Quedan: $2.80 para Enero
```

---

## RESUMEN VISUAL FINAL

```
┌─────────────────────────────────────────┐
│     RUTA PARA VER ESTADÍSTICAS          │
├─────────────────────────────────────────┤
│                                         │
│ adsense.google.com                      │
│         ↓                               │
│ Inicia con Google                       │
│         ↓                               │
│ Menú izquierdo → "INFORMES"            │
│         ↓                               │
│ "Resumen"                               │
│         ↓                               │
│ ¡Mira tus estadísticas! 📊             │
│                                         │
└─────────────────────────────────────────┘
```

---

## ✅ CHECKLIST FINAL

```
☐ Cuenta Google AdSense creada
☐ Sitio verificado (24-48 horas)
☐ CA ID obtenido
☐ Anuncios/Slots creados
☐ CA ID insertado en AdSense.jsx
☐ Slot IDs insertados en App.jsx
☐ Deploy realizado
☐ Ads visibles en sitio
☐ Estadísticas comenzando a aparecer
☐ ¡A monetizar! 💰
```

---

**Creado para: DevToolsPro v1.0**
**Última actualización: 2025**
