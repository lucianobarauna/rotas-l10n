import { defaultLocale } from "./config";

export function utilGetPrefixPath(path, prefix) {
  // `/:locale${route.path.replace(/\s/g, "")}` - remove os espaços
  // em branco e ajusta a url para o formato /:locale/foo/bar

  return `/${prefix}${path.replace(/\s/g, "")}`;
}

export function utilLocalizeRoutes(routes) {
  return routes.map((route) => {
    // we default to localizing
    if (route.localize !== false) {
      return {
        ...route,
        path: utilGetPrefixPath(route.path, ":locale")
      };
    }

    return { ...route };
  });
}

/**
 *  Troca a linguagem do html para a liguagem setada
 * @param {string} locale
 */
export function utilSwithHtmlLocale(locale) {
  const html = window.document.documentElement;
  html.lang = locale;
}

// /**
//  *  Coloca um prefixo de linguagem formatando a caminho
//  * @param {string} path - caminho da url
//  * @param {string} prefix - prefixo escolhido
//  */
// export function utilPrefixPathLocale(path = "/") {
//   return `/:locale${path}`;
// }

export function getLocaleFromPath(path) {
  if (path === "/") {
    return defaultLocale;
  }

  return path.split("/")[1];
}
