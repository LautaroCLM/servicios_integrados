import { useEffect, useRef, useState } from "react";
import {
  adminNovedadesService,
  type CreateNovedadPayload,
  type UpdateNovedadPayload,
} from "@/services/adminNovedadesService";
import type { Novedad } from "@/lib/supabase";
import { toast } from "sonner";
import {
  AlertCircle,
  ArrowUpDown,
  Calendar,
  Check,
  Eye,
  EyeOff,
  Image as ImageIcon,
  KeyRound,
  Lock,
  LogOut,
  Plus,
  RefreshCw,
  Sparkles,
  Trash2,
  UploadCloud,
  X,
  ExternalLink,
  Edit3,
} from "lucide-react";

const CATEGORY_PRESETS = [
  "Operaciones 24/7",
  "Líder FARO",
  "Nuevas Tecnologías",
  "Servicios",
];

export default function AdminNovedades() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isVerifyingAuth, setIsVerifyingAuth] = useState<boolean>(true);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Dashboard state
  const [novedades, setNovedades] = useState<Novedad[]>([]);
  const [isLoadingList, setIsLoadingList] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");

  // Modal Crear / Editar
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Novedad | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Form Fields
  const [formCategory, setFormCategory] = useState("Operaciones 24/7");
  const [formCustomCategory, setFormCustomCategory] = useState("");
  const [formDate, setFormDate] = useState("");
  const [formTitle, setFormTitle] = useState("");
  const [formSubtitle, setFormSubtitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formImage, setFormImage] = useState("");
  const [formHighlights, setFormHighlights] = useState<string[]>([""]);
  const [formActive, setFormActive] = useState(true);
  const [formSortOrder, setFormSortOrder] = useState(1);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Delete Confirmation Modal
  const [itemToDelete, setItemToDelete] = useState<Novedad | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Ensure noindex, nofollow for this private admin route
  useEffect(() => {
    document.title = "Panel de Administración — Novedades | Servicios Integrados";
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.setAttribute("name", "robots");
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute("content", "noindex, nofollow");

    // Verificar si ya existe token activo en la sesión
    checkExistingSession();
  }, []);

  const checkExistingSession = async () => {
    setIsVerifyingAuth(true);
    try {
      const valid = await adminNovedadesService.verifySession();
      if (valid) {
        setIsAuthenticated(true);
        loadNovedades();
      }
    } catch {
      setIsAuthenticated(false);
    } finally {
      setIsVerifyingAuth(false);
    }
  };

  const loadNovedades = async () => {
    setIsLoadingList(true);
    try {
      const data = await adminNovedadesService.listAll();
      setNovedades(data);
    } catch (err: any) {
      toast.error(err.message || "Error al cargar novedades");
      if (err.message?.includes("Sesión")) {
        setIsAuthenticated(false);
      }
    } finally {
      setIsLoadingList(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setAuthError("Por favor ingrese la contraseña.");
      return;
    }

    setIsLoggingIn(true);
    setAuthError("");

    try {
      await adminNovedadesService.login(password.trim());
      setIsAuthenticated(true);
      toast.success("Sesión iniciada correctamente.");
      loadNovedades();
    } catch (err: any) {
      setAuthError(err.message || "Contraseña inválida. Verifique sus credenciales.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    adminNovedadesService.logout();
    setIsAuthenticated(false);
    setPassword("");
    toast.info("Sesión cerrada.");
  };

  const handleToggleActive = async (item: Novedad) => {
    const nextState = !item.active;
    // Actualización optimista en UI
    setNovedades((prev) =>
      prev.map((n) => (n.id === item.id ? { ...n, active: nextState } : n))
    );

    try {
      await adminNovedadesService.toggleActive(item.id, nextState);
      toast.success(nextState ? "Novedad publicada" : "Novedad despublicada");
    } catch (err: any) {
      toast.error("No se pudo cambiar el estado: " + err.message);
      // Revertir
      setNovedades((prev) =>
        prev.map((n) => (n.id === item.id ? { ...n, active: item.active } : n))
      );
    }
  };

  const openCreateModal = () => {
    setEditingItem(null);
    setFormCategory(CATEGORY_PRESETS[0]);
    setFormCustomCategory("");
    setFormDate(
      new Date().toLocaleDateString("es-AR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    );
    setFormTitle("");
    setFormSubtitle("");
    setFormDescription("");
    setFormImage("/img/servicio1.webp");
    setFormHighlights(["", "", ""]);
    setFormActive(true);
    setFormSortOrder(novedades.length + 1);
    setIsFormOpen(true);
  };

  const openEditModal = (item: Novedad) => {
    setEditingItem(item);
    if (CATEGORY_PRESETS.includes(item.category)) {
      setFormCategory(item.category);
      setFormCustomCategory("");
    } else {
      setFormCategory("custom");
      setFormCustomCategory(item.category);
    }
    setFormDate(item.date);
    setFormTitle(item.title);
    setFormSubtitle(item.subtitle);
    setFormDescription(item.description);
    setFormImage(item.image);
    setFormHighlights(
      item.highlights && item.highlights.length > 0 ? [...item.highlights] : [""]
    );
    setFormActive(item.active);
    setFormSortOrder(item.sort_order);
    setIsFormOpen(true);
  };

  const handleHighlightChange = (index: number, value: string) => {
    const updated = [...formHighlights];
    updated[index] = value;
    setFormHighlights(updated);
  };

  const addHighlightField = () => {
    setFormHighlights([...formHighlights, ""]);
  };

  const removeHighlightField = (index: number) => {
    if (formHighlights.length <= 1) {
      setFormHighlights([""]);
      return;
    }
    setFormHighlights(formHighlights.filter((_, i) => i !== index));
  };

  const handleImageFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("La imagen supera el límite máximo de 5MB.");
      return;
    }

    setIsUploadingImage(true);
    const uploadToast = toast.loading("Subiendo imagen a Supabase Storage...");
    try {
      const { url } = await adminNovedadesService.uploadImage(file);
      setFormImage(url);
      toast.success("Imagen subida con éxito.", { id: uploadToast });
    } catch (err: any) {
      toast.error(err.message || "Error al subir la imagen.", { id: uploadToast });
    } finally {
      setIsUploadingImage(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const category =
      formCategory === "custom" ? formCustomCategory.trim() : formCategory;

    if (!formTitle.trim()) {
      toast.error("El título es obligatorio.");
      return;
    }
    if (!category) {
      toast.error("La categoría es obligatoria.");
      return;
    }
    if (!formDescription.trim()) {
      toast.error("La descripción es obligatoria.");
      return;
    }
    if (!formImage.trim()) {
      toast.error("Debe especificar o subir una imagen.");
      return;
    }

    const cleanedHighlights = formHighlights
      .map((h) => h.trim())
      .filter((h) => h.length > 0);

    setIsSaving(true);
    const saveToast = toast.loading(
      editingItem ? "Actualizando novedad..." : "Creando novedad..."
    );

    try {
      if (editingItem) {
        const payload: UpdateNovedadPayload = {
          id: editingItem.id,
          category,
          date: formDate.trim() || "Reciente",
          title: formTitle.trim(),
          subtitle: formSubtitle.trim(),
          description: formDescription.trim(),
          image: formImage.trim(),
          highlights: cleanedHighlights,
          active: formActive,
          sort_order: Number(formSortOrder) || 0,
          old_image: editingItem.image,
        };

        const updated = await adminNovedadesService.update(payload);
        setNovedades((prev) =>
          prev.map((n) => (n.id === updated.id ? updated : n))
        );
        toast.success("Novedad actualizada exitosamente.", { id: saveToast });
      } else {
        const payload: CreateNovedadPayload = {
          category,
          date: formDate.trim() || "Reciente",
          title: formTitle.trim(),
          subtitle: formSubtitle.trim(),
          description: formDescription.trim(),
          image: formImage.trim(),
          highlights: cleanedHighlights,
          active: formActive,
          sort_order: Number(formSortOrder) || 0,
        };

        const created = await adminNovedadesService.create(payload);
        setNovedades((prev) => [created, ...prev]);
        toast.success("Novedad creada exitosamente.", { id: saveToast });
      }
      setIsFormOpen(false);
    } catch (err: any) {
      toast.error(err.message || "Error al guardar novedad.", { id: saveToast });
    } finally {
      setIsSaving(false);
    }
  };

  const confirmDelete = (item: Novedad) => {
    setItemToDelete(item);
  };

  const handleDelete = async () => {
    if (!itemToDelete) return;
    setIsDeleting(true);
    const deleteToast = toast.loading("Eliminando novedad...");
    try {
      await adminNovedadesService.delete(itemToDelete.id, itemToDelete.image);
      setNovedades((prev) => prev.filter((n) => n.id !== itemToDelete.id));
      toast.success("Novedad eliminada correctamente.", { id: deleteToast });
      setItemToDelete(null);
    } catch (err: any) {
      toast.error(err.message || "Error al eliminar novedad.", { id: deleteToast });
    } finally {
      setIsDeleting(false);
    }
  };

  const filteredNovedades = novedades.filter((item) => {
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesQuery) return false;
    if (statusFilter === "active") return item.active;
    if (statusFilter === "inactive") return !item.active;
    return true;
  });

  // ---------------------------------------------------------------------------
  // VISTA 1: CARGANDO SESIÓN
  // ---------------------------------------------------------------------------
  if (isVerifyingAuth) {
    return (
      <div className="min-h-screen bg-[#10181d] flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-3">
          <RefreshCw className="animate-spin text-[#a78bfa]" size={32} />
          <p className="text-sm text-neutral-400 font-medium">Verificando acceso...</p>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // VISTA 2: LOGIN CON CONTRASEÑA
  // ---------------------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0d1317] flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#152026] p-7 sm:p-8 shadow-2xl text-[#fff7ee]">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#6d28d9]/20 border border-[#a78bfa]/30 text-[#a78bfa] mb-4 shadow-lg shadow-[#6d28d9]/20">
              <Lock size={26} />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#a78bfa]">
              Acceso Restringido
            </span>
            <h1 className="font-display text-2xl font-bold mt-1 text-white">
              Panel de Novedades
            </h1>
            <p className="text-xs text-neutral-400 mt-1">
              Servicios Integrados — Mantenimiento e Ingeniería
            </p>
          </div>

          {authError && (
            <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-200">
              <AlertCircle size={16} className="shrink-0 text-red-400" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="admin-password"
                className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
              >
                Contraseña Administrativa
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
                  <KeyRound size={17} />
                </div>
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingrese la contraseña..."
                  autoFocus
                  required
                  className="w-full rounded-xl border border-white/15 bg-black/40 py-2.5 pl-10 pr-10 text-sm text-white placeholder-neutral-500 focus:border-[#a78bfa] focus:outline-none focus:ring-2 focus:ring-[#6d28d9]/40 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#6d28d9] hover:bg-[#5b21b6] text-white py-3 px-4 font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#6d28d9]/30 transition-all duration-200 active:scale-[0.98] disabled:opacity-50 cursor-pointer"
            >
              {isLoggingIn ? (
                <>
                  <RefreshCw size={16} className="animate-spin" /> Verificando...
                </>
              ) : (
                <>Ingresar al Panel</>
              )}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-white/10 text-center">
            <a
              href="/"
              className="text-xs text-neutral-400 hover:text-[#a78bfa] transition-colors inline-flex items-center gap-1"
            >
              Volver al sitio web principal
            </a>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // VISTA 3: DASHBOARD ADMINISTRATIVO
  // ---------------------------------------------------------------------------
  const activeCount = novedades.filter((n) => n.active).length;
  const inactiveCount = novedades.length - activeCount;

  return (
    <div className="min-h-screen bg-[#0e1418] text-[#fff7ee] pb-16">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#152026]/90 backdrop-blur-md px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#6d28d9]/30 border border-[#a78bfa]/40 text-[#a78bfa]">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display font-bold text-lg text-white">
                  Panel de Novedades
                </h1>
                <span className="rounded-full bg-[#6d28d9]/30 border border-[#a78bfa]/30 px-2 py-0.5 text-[10px] font-bold text-[#a78bfa] uppercase">
                  Privado
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Administración de contenidos en Supabase
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-3 py-2 text-xs font-semibold text-neutral-300 transition-colors"
            >
              <ExternalLink size={14} /> Ver Sitio
            </a>
            <button
              type="button"
              onClick={openCreateModal}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#6d28d9] hover:bg-[#5b21b6] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-md shadow-[#6d28d9]/30 transition-all cursor-pointer"
            >
              <Plus size={16} /> Nueva Novedad
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-red-300 px-3 py-2 text-xs font-semibold transition-colors cursor-pointer"
              title="Cerrar Sesión"
            >
              <LogOut size={15} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 mt-6 space-y-6">
        {/* Metric Cards & Filter Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/10 bg-[#152026] p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 font-semibold uppercase">Total</p>
              <p className="text-2xl font-bold text-white mt-0.5">{novedades.length}</p>
            </div>
            <div className="h-10 w-10 rounded-xl bg-white/5 grid place-items-center text-neutral-300">
              <Sparkles size={20} />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#152026] p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-emerald-400 font-semibold uppercase">Activas (Públicas)</p>
              <p className="text-2xl font-bold text-emerald-400 mt-0.5">{activeCount}</p>
            </div>
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 grid place-items-center text-emerald-400">
              <Check size={20} />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#152026] p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-amber-400 font-semibold uppercase">Inactivas (Borrador)</p>
              <p className="text-2xl font-bold text-amber-400 mt-0.5">{inactiveCount}</p>
            </div>
            <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/30 grid place-items-center text-amber-400">
              <EyeOff size={20} />
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="rounded-2xl border border-white/10 bg-[#152026] p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar por título, categoría o texto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:border-[#a78bfa] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex rounded-xl border border-white/10 bg-black/30 p-1 text-xs">
              <button
                type="button"
                onClick={() => setStatusFilter("all")}
                className={`rounded-lg px-3 py-1 font-semibold transition-colors cursor-pointer ${
                  statusFilter === "all"
                    ? "bg-[#6d28d9] text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Todas ({novedades.length})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter("active")}
                className={`rounded-lg px-3 py-1 font-semibold transition-colors cursor-pointer ${
                  statusFilter === "active"
                    ? "bg-emerald-600 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Activas ({activeCount})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter("inactive")}
                className={`rounded-lg px-3 py-1 font-semibold transition-colors cursor-pointer ${
                  statusFilter === "inactive"
                    ? "bg-amber-600 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Inactivas ({inactiveCount})
              </button>
            </div>

            <button
              type="button"
              onClick={loadNovedades}
              disabled={isLoadingList}
              className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              title="Recargar lista"
            >
              <RefreshCw size={15} className={isLoadingList ? "animate-spin" : ""} />
            </button>
          </div>
        </div>

        {/* Novedades Table / Cards */}
        {isLoadingList && novedades.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-[#152026] p-12 text-center text-neutral-400">
            <RefreshCw className="animate-spin mx-auto text-[#a78bfa] mb-3" size={28} />
            <p className="text-sm">Cargando novedades desde Supabase...</p>
          </div>
        ) : filteredNovedades.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-[#152026] p-12 text-center text-neutral-400">
            <Sparkles size={32} className="mx-auto text-neutral-600 mb-3" />
            <p className="text-base font-bold text-white">No se encontraron novedades</p>
            <p className="text-xs text-neutral-400 mt-1">
              Pruebe cambiando los filtros de búsqueda o cree una nueva novedad.
            </p>
            <button
              type="button"
              onClick={openCreateModal}
              className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-[#6d28d9] px-4 py-2 text-xs font-bold text-white cursor-pointer"
            >
              <Plus size={15} /> Crear Novedad
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredNovedades.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-[#152026] p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:border-[#a78bfa]/40 hover:bg-[#18252c]"
              >
                {/* Left: Thumbnail & Info */}
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/img/servicio1.webp";
                      }}
                    />
                    <div className="absolute top-1 left-1 rounded bg-black/70 px-1.5 py-0.5 text-[9px] font-bold text-white">
                      #{item.sort_order}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="rounded-md border border-[#a78bfa]/40 bg-[#6d28d9]/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#a78bfa]">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-neutral-400">
                        <Calendar size={12} /> {item.date}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          item.active
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                        }`}
                      >
                        {item.active ? "Activa" : "Inactiva"}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-white truncate">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#a78bfa] truncate mt-0.5">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-neutral-400 line-clamp-1 mt-1">
                      {item.description}
                    </p>

                    {item.highlights && item.highlights.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {item.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="rounded bg-white/5 px-2 py-0.5 text-[10px] text-neutral-300 truncate max-w-xs"
                          >
                            • {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Controls & Actions */}
                <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-white/10">
                  {/* Switch Active */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-400 font-medium">
                      {item.active ? "Visible" : "Oculta"}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleToggleActive(item)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        item.active ? "bg-emerald-500" : "bg-neutral-700"
                      }`}
                      role="switch"
                      aria-checked={item.active}
                      aria-label="Toggle visibilidad"
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          item.active ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => openEditModal(item)}
                      className="inline-flex items-center gap-1 rounded-xl border border-white/15 bg-white/5 hover:bg-white/15 text-white px-3 py-2 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <Edit3 size={14} /> Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => confirmDelete(item)}
                      className="grid h-8 w-8 place-items-center rounded-xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/25 text-red-300 transition-colors cursor-pointer"
                      title="Eliminar novedad"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* =======================================================================
       * MODAL FORM: CREAR / EDITAR NOVEDAD
       * ======================================================================= */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl border border-white/15 bg-[#152026] text-white shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-[#10181d]">
              <div className="flex items-center gap-2.5">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#6d28d9]/30 text-[#a78bfa]">
                  {editingItem ? <Edit3 size={16} /> : <Plus size={16} />}
                </div>
                <h2 className="font-display font-bold text-lg">
                  {editingItem ? "Editar Novedad" : "Nueva Novedad"}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleFormSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* Título */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Título de la Novedad *
                </label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="Ej: Nuevo Servicio de Tornería y Mecanizado de Guardia 24 hs"
                  required
                  className="w-full rounded-xl border border-white/15 bg-black/40 p-2.5 text-sm text-white placeholder-neutral-500 focus:border-[#a78bfa] focus:outline-none"
                />
              </div>

              {/* Subtítulo */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Subtítulo / Bajada
                </label>
                <input
                  type="text"
                  value={formSubtitle}
                  onChange={(e) => setFormSubtitle(e.target.value)}
                  placeholder="Ej: Respuesta inmediata ante paradas de planta no programadas."
                  className="w-full rounded-xl border border-white/15 bg-black/40 p-2.5 text-sm text-white placeholder-neutral-500 focus:border-[#a78bfa] focus:outline-none"
                />
              </div>

              {/* Categoría y Fecha en 2 columnas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Categoría *
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-black/40 p-2.5 text-sm text-white focus:border-[#a78bfa] focus:outline-none"
                  >
                    {CATEGORY_PRESETS.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#152026]">
                        {cat}
                      </option>
                    ))}
                    <option value="custom" className="bg-[#152026]">
                      + Otra categoría personalizada
                    </option>
                  </select>
                  {formCategory === "custom" && (
                    <input
                      type="text"
                      value={formCustomCategory}
                      onChange={(e) => setFormCustomCategory(e.target.value)}
                      placeholder="Escriba la nueva categoría..."
                      required
                      className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 p-2 text-xs text-white focus:border-[#a78bfa] focus:outline-none"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Fecha Visible
                  </label>
                  <input
                    type="text"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    placeholder="Ej: 24 de Agosto, 2026"
                    className="w-full rounded-xl border border-white/15 bg-black/40 p-2.5 text-sm text-white placeholder-neutral-500 focus:border-[#a78bfa] focus:outline-none"
                  />
                </div>
              </div>

              {/* Descripción */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Descripción Detallada *
                </label>
                <textarea
                  rows={3}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Descripción técnica del servicio o proyecto..."
                  required
                  className="w-full rounded-xl border border-white/15 bg-black/40 p-2.5 text-sm text-white placeholder-neutral-500 focus:border-[#a78bfa] focus:outline-none"
                />
              </div>

              {/* Imagen y Subida a Storage */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Imagen de la Novedad *
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-black/40">
                    {formImage ? (
                      <img
                        src={formImage}
                        alt="Previsualización"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/img/servicio1.webp";
                        }}
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center text-neutral-500">
                        <ImageIcon size={24} />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 space-y-2 w-full">
                    <input
                      type="text"
                      value={formImage}
                      onChange={(e) => setFormImage(e.target.value)}
                      placeholder="URL o ruta de la imagen (ej: /img/servicio1.webp o URL Supabase)"
                      required
                      className="w-full rounded-xl border border-white/15 bg-black/40 p-2 text-xs text-white focus:border-[#a78bfa] focus:outline-none"
                    />

                    <div className="flex items-center gap-2">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/webp,image/jpeg,image/png,image/gif"
                        onChange={handleImageFileSelect}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isUploadingImage}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-[#a78bfa]/40 bg-[#6d28d9]/20 hover:bg-[#6d28d9]/30 text-[#a78bfa] px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer disabled:opacity-50"
                      >
                        {isUploadingImage ? (
                          <RefreshCw size={13} className="animate-spin" />
                        ) : (
                          <UploadCloud size={13} />
                        )}
                        {isUploadingImage ? "Subiendo..." : "Subir nueva imagen a Supabase"}
                      </button>
                      <span className="text-[11px] text-neutral-400">
                        WebP, JPG o PNG (máx 5MB)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Puntos destacados / Highlights */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                    Puntos Clave / Highlights
                  </label>
                  <button
                    type="button"
                    onClick={addHighlightField}
                    className="text-xs text-[#a78bfa] hover:text-white font-semibold transition-colors cursor-pointer"
                  >
                    + Agregar punto
                  </button>
                </div>

                <div className="space-y-2">
                  {formHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="grid h-6 w-6 place-items-center rounded-full bg-[#6d28d9]/30 text-[#a78bfa] text-xs font-bold shrink-0">
                        {index + 1}
                      </div>
                      <input
                        type="text"
                        value={highlight}
                        onChange={(e) => handleHighlightChange(index, e.target.value)}
                        placeholder={`Punto destacado ${index + 1}`}
                        className="flex-1 rounded-xl border border-white/15 bg-black/40 p-2 text-xs text-white focus:border-[#a78bfa] focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => removeHighlightField(index)}
                        className="grid h-8 w-8 place-items-center rounded-xl hover:bg-white/10 text-neutral-400 hover:text-red-400 transition-colors cursor-pointer"
                        title="Eliminar punto"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Orden y Publicada */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Orden de Visualización
                  </label>
                  <input
                    type="number"
                    value={formSortOrder}
                    onChange={(e) => setFormSortOrder(parseInt(e.target.value) || 0)}
                    min={1}
                    className="w-full rounded-xl border border-white/15 bg-black/40 p-2 text-xs text-white focus:border-[#a78bfa] focus:outline-none"
                  />
                  <p className="text-[10px] text-neutral-400 mt-1">
                    Menor número aparece primero en el modal.
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 sm:pt-6">
                  <input
                    id="form-active"
                    type="checkbox"
                    checked={formActive}
                    onChange={(e) => setFormActive(e.target.checked)}
                    className="h-5 w-5 rounded border-white/20 bg-black/40 text-[#6d28d9] focus:ring-[#6d28d9] cursor-pointer"
                  />
                  <label
                    htmlFor="form-active"
                    className="text-xs font-semibold text-white cursor-pointer"
                  >
                    Publicar inmediatamente en la web pública
                  </label>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  disabled={isSaving}
                  className="rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-4 py-2.5 text-xs font-semibold text-neutral-300 transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#6d28d9] hover:bg-[#5b21b6] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#6d28d9]/30 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSaving ? (
                    <>
                      <RefreshCw size={14} className="animate-spin" /> Guardando...
                    </>
                  ) : (
                    <>Guardar Novedad</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =======================================================================
       * MODAL CONFIRMACIÓN: ELIMINAR NOVEDAD
       * ======================================================================= */}
      {itemToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-red-500/30 bg-[#152026] p-6 text-white shadow-2xl">
            <div className="flex items-center gap-3 text-red-400 mb-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-red-500/20 border border-red-500/30">
                <Trash2 size={20} />
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                ¿Eliminar esta novedad?
              </h3>
            </div>

            <p className="text-xs text-neutral-300 mb-2">
              Está a punto de eliminar:
            </p>
            <p className="text-sm font-bold text-white bg-black/40 p-3 rounded-xl border border-white/10 mb-4">
              "{itemToDelete.title}"
            </p>
            <p className="text-xs text-neutral-400 mb-6">
              Esta acción eliminará el registro de Supabase y su imagen asociada en caso de no estar utilizada por otra novedad. Esta acción no se puede deshacer.
            </p>

            <div className="flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setItemToDelete(null)}
                disabled={isDeleting}
                className="rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-4 py-2 text-xs font-semibold text-neutral-300 transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleDelete}
                disabled={isDeleting}
                className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer disabled:opacity-50"
              >
                {isDeleting ? (
                  <>
                    <RefreshCw size={14} className="animate-spin" /> Eliminando...
                  </>
                ) : (
                  <>Sí, Eliminar</>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
