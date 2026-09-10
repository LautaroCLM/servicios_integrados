-- =============================================================================
-- MIGRACIÓN SUPABASE: SISTEMA DE NOVEDADES — SERVICIOS INTEGRADOS
-- Proyecto: tioantu (icnaufhmralkaukefpop)
-- Fecha: 2026-09-07
-- =============================================================================

-- 1. EXTENSIONES
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. TABLA NOVEDADES
CREATE TABLE IF NOT EXISTS public.novedades (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category TEXT NOT NULL,
    date TEXT NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL,
    highlights JSONB NOT NULL DEFAULT '[]'::jsonb,
    active BOOLEAN NOT NULL DEFAULT true,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Comentarios de documentación
COMMENT ON TABLE public.novedades IS 'Tabla de novedades técnicas y corporativas de Servicios Integrados';
COMMENT ON COLUMN public.novedades.highlights IS 'Array de strings en formato JSONB con los puntos clave destacados';
COMMENT ON COLUMN public.novedades.active IS 'Indica si la novedad es visible públicamente en el sitio web';
COMMENT ON COLUMN public.novedades.sort_order IS 'Orden de visualización (menor número = mayor prioridad)';

-- 3. TRIGGER AUTOMÁTICO PARA updated_at
CREATE OR REPLACE FUNCTION public.handle_novedades_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_novedades_updated_at ON public.novedades;
CREATE TRIGGER trg_novedades_updated_at
    BEFORE UPDATE ON public.novedades
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_novedades_updated_at();

-- 4. ÍNDICES DE RENDIMIENTO
CREATE INDEX IF NOT EXISTS idx_novedades_active_sort 
    ON public.novedades (active, sort_order ASC, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_novedades_category 
    ON public.novedades (category);

-- 5. SEGURIDAD: ROW LEVEL SECURITY (RLS)
ALTER TABLE public.novedades ENABLE ROW LEVEL SECURITY;

-- Política de lectura pública: Solo registros activos
DROP POLICY IF EXISTS "Public can read active novedades" ON public.novedades;
CREATE POLICY "Public can read active novedades"
    ON public.novedades
    FOR SELECT
    USING (active = true);

-- Políticas para Service Role / Administración segura / Usuarios autenticados
DROP POLICY IF EXISTS "Service role has full access to novedades" ON public.novedades;
DROP POLICY IF EXISTS "Admin full access to novedades" ON public.novedades;
CREATE POLICY "Admin full access to novedades"
    ON public.novedades
    FOR ALL
    USING (auth.role() = 'service_role' OR auth.role() = 'supabase_admin' OR auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'service_role' OR auth.role() = 'supabase_admin' OR auth.role() = 'authenticated');

-- 6. CONFIGURACIÓN DEL BUCKET DE STORAGE PARA IMÁGENES
-- Crear el bucket 'novedades-images' si no existe
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'novedades-images',
    'novedades-images',
    true,
    5242880, -- 5 MB máximo
    ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']::text[]
)
ON CONFLICT (id) DO UPDATE SET
    public = true,
    file_size_limit = 5242880,
    allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']::text[];

-- Políticas de RLS en storage.objects para novedades-images
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Lectura pública de imágenes
DROP POLICY IF EXISTS "Public can view novedades images" ON storage.objects;
CREATE POLICY "Public can view novedades images"
    ON storage.objects
    FOR SELECT
    USING (bucket_id = 'novedades-images');

-- Acceso de escritura exclusivo para service_role y authenticated (admin)
DROP POLICY IF EXISTS "Service role can upload novedades images" ON storage.objects;
DROP POLICY IF EXISTS "Admin can upload novedades images" ON storage.objects;
CREATE POLICY "Admin can upload novedades images"
    ON storage.objects
    FOR INSERT
    WITH CHECK (
        bucket_id = 'novedades-images' 
        AND (auth.role() = 'service_role' OR auth.role() = 'supabase_admin' OR auth.role() = 'authenticated')
    );

DROP POLICY IF EXISTS "Service role can update novedades images" ON storage.objects;
DROP POLICY IF EXISTS "Admin can update novedades images" ON storage.objects;
CREATE POLICY "Admin can update novedades images"
    ON storage.objects
    FOR UPDATE
    USING (
        bucket_id = 'novedades-images' 
        AND (auth.role() = 'service_role' OR auth.role() = 'supabase_admin' OR auth.role() = 'authenticated')
    );

DROP POLICY IF EXISTS "Service role can delete novedades images" ON storage.objects;
DROP POLICY IF EXISTS "Admin can delete novedades images" ON storage.objects;
CREATE POLICY "Admin can delete novedades images"
    ON storage.objects
    FOR DELETE
    USING (
        bucket_id = 'novedades-images' 
        AND (auth.role() = 'service_role' OR auth.role() = 'supabase_admin' OR auth.role() = 'authenticated')
    );

-- 7. MIGRACIÓN / SEED: LAS 4 NOVEDADES ACTUALES
INSERT INTO public.novedades (
    id,
    category,
    date,
    title,
    subtitle,
    description,
    image,
    highlights,
    active,
    sort_order
)
SELECT * FROM (VALUES
    (
        '10000000-0000-0000-0000-000000000001'::uuid,
        'Operaciones 24/7',
        '24 de Agosto, 2026',
        'Nuevo Servicio de Tornería y Mecanizado de Guardia 24 hs',
        'Respuesta inmediata ante paradas de planta no programadas.',
        'Hemos habilitado un turno de guardia activa las 24 horas los 365 días del año para el mecanizado y rectificado urgente de componentes mecánicos, ejes, bujes y piezas en acero inoxidable sanitario para la industria alimenticia.',
        '/img/servicio1.webp',
        '["Respuesta rápida en campo y taller", "Mecanizado en acero inoxidable 304 / 316L", "Fabricación según muestra física o plano técnico"]'::jsonb,
        true,
        1
    ),
    (
        '10000000-0000-0000-0000-000000000002'::uuid,
        'Líder FARO',
        '18 de Agosto, 2026',
        'Formación Operativa: Método Líder FARO® en Planta',
        'Entrenamiento práctico a supervisores, líderes técnicos y operadores de línea.',
        'Finalizamos con éxito la nueva etapa de capacitación en planta aplicando el modelo 70/20/10. Los supervisores y operadores trabajaron directamente sobre pizarrón y equipos en línea de producción, reforzando los 4 pilares: Fortaleza, Acción, Responsabilidad y Orientación.',
        '/img/faro.webp',
        '["70% aprendizaje directo sobre equipos en planta", "Coaching a supervisores, mandos medios y operadores de línea", "Enfoque directo en continuidad operativa"]'::jsonb,
        true,
        2
    ),
    (
        '10000000-0000-0000-0000-000000000003'::uuid,
        'Nuevas Tecnologías',
        '12 de Agosto, 2026',
        'Optimización en Mantenimiento Térmico para Hornos de Obleas',
        'Desincrustación profunda y calibración de paralelismo.',
        'Implementamos nuestro nuevo sistema de limpieza y calibración de alta precisión en planchas de cocción para hornos de obleas continuos, logrando una reducción significativa del tiempo de parada y mejorando la homogeneidad del horneado.',
        '/img/oblea2.webp',
        '["Calibración micrométrica de planchas de cocción", "Limpieza técnica no corrosiva", "Mayor rendimiento energético y vida útil"]'::jsonb,
        true,
        3
    ),
    (
        '10000000-0000-0000-0000-000000000004'::uuid,
        'Servicios',
        '05 de Agosto, 2026',
        'Sistemas de Frío e Instalación de Chillers de Alta Capacidad',
        'Soluciones térmicas para líneas de moldeo y túneles de congelado.',
        'Ampliamos nuestra capacidad de atención técnica para plantas de chocolates y productos congelados, integrando auditorías térmicas, mantenimiento preventivo de compresores y calibración de bombas de proceso.',
        '/img/servicio5.webp',
        '["Mantenimiento preventivo en túneles de frío", "Auditoría y balance térmico de proceso", "Atención permanente de emergencias"]'::jsonb,
        true,
        4
    )
) AS v(id, category, date, title, subtitle, description, image, highlights, active, sort_order)
WHERE NOT EXISTS (SELECT 1 FROM public.novedades LIMIT 1);
