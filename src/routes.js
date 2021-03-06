import Inici from "./views/Inici.vue";
import NotFound from "./views/NotFound.vue";
import Capitols from "./views/Capitols.vue";
import Colaboracions from "./views/Colaboracions.vue";
import ProjectesInteres from "./views/ProjectesInteres.vue";
import CapitolDestacat from "./views/CapitolDestacat.vue";

export const routes = [
  { path: "/", name: "inici", component: Inici },
  { path: "/:path(.*)", component: NotFound },
  { path: "/capitols", name: "capitols", component: Capitols },
  {
    path: "/capitols/:id",
    name: "capitolDestacat",
    component: CapitolDestacat,
  },
  {
    path: "/col·laboracions",
    name: "col·laboracions",
    component: Colaboracions,
  },
  {
    path: "/projectesInteres",
    name: "projectesInteres",
    component: ProjectesInteres,
  },
];
