import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Helper for lazy Gemini Client
  const getAiClient = () => {
    if (!process.env.GEMINI_API_KEY) {
      return null;
    }
    return new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  };

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "Davimar Meta Ads Analyst Backend" });
  });

  // Meta Analyst AI endpoint
  app.post("/api/meta-analyst", async (req, res) => {
    try {
      const { question, context } = req.body;
      const ai = getAiClient();

      if (!ai) {
        return res.json({
          reply: "Como Analista Senior de Meta Ads para @davimargroup, he analizado los patrones de Abril-Mayo frente a Junio-Julio. Tu objetivo B2B principal debe ser capitalizar el 33% de alcance no-seguidores mediante campañas de Generación de Leads en WhatsApp y formularios con segmentación de tomadores de decisión en Trade Marketing y Retail.",
          fallback: true
        });
      }

      const systemPrompt = `Eres una analista de Meta Ads y Growth Marketing senior con más de 8 años de experiencia especializada en el sector B2B (distribución comercial, impulso en Punto de Venta (PDV), retail, canal moderno y expansión internacional de marcas extranjeras hacia Venezuela para la cuenta @davimargroup).
Tu tono es analítico, profesional, transparente, empático y enfocado en la eficiencia del presupuesto (ROAS, CPL, CPA, CTR, Retención).
Hablas en español claro con terminología precisa de Meta Ads (Pixel, CAPI, TOFU/MOFU/BOFU, Hook Rate, Hold Rate, Lead Generation, WhatsApp Direct).
Datos clave de @davimargroup:
- Línea de negocio: Soluciones B2B, impulso de marcas en Punto de Venta (PDV), distribución comercial con 60 años de trayectoria, almacenes de alta densidad y flota propia.
- Expansión Internacional: Captación de marcas de Colombia, España, México, Chile, Italia, Portugal, Brasil y Argentina interesadas en colocar sus productos en cadenas de supermercados venezolanas.
- Buyer Personas Internacionales: Directores de Exportación (Export Managers), Directores de Expansión Latam, Gerentes de Trade Marketing Global y Directores de Cadena de Suministro.
- Pilares de confianza internacional: Videos de infraestructura real (montacargas, flota), casos de éxito de marcas líderes (ej. Alimentos Mary), presencia de mercaderistas en PDV, 60 años de solvencia patrimonial y procesos claros de importación/trazabilidad.
- Abril/Mayo: 13.4k vistas (~13.4k al cierre, 3.4k al corte 10 abril), 67% seguidores y 33% no seguidores (+107 seguidores netos, base ~2k), 13 publicaciones (11 feed/carruseles y 2 reels). Top post: "¿Qué pasa cuando una marca tiene impulso en PDV?" con 1.993 vistas y +4 seguidores directos.
- Junio/Julio: Período de consolidación orgánica con 15.8k impresiones, mayor afinidad en carruseles tácticos de PDV y reels operativos de supermercados/retail.
- Situación actual: Aún NO se ha invertido en Paid Ads. Se está estructurando el marco de medición previo al lanzamiento de presupuesto.

Responde de forma ejecutiva, estructurada con viñetas claras y recomendaciones tácticas accionables.`;

      const userMessage = `Pregunta del usuario o solicitud estratégica:
${question}

Contexto adicional seleccionado en el dashboard:
${JSON.stringify(context || {})}

Por favor, brinda tu diagnóstico o recomendación estratégica como Analista de Meta.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: userMessage,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
        }
      });

      res.json({
        reply: response.text || "No se pudo generar la recomendación en este momento.",
        fallback: false
      });
    } catch (error: any) {
      console.error("Error in meta-analyst endpoint:", error);
      res.status(500).json({
        error: "Error processing analyst request",
        details: error?.message || String(error)
      });
    }
  });

  // Vite middleware in dev or static files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Davimar Meta Analytics Server running on http://localhost:${PORT}`);
  });
}

startServer();
