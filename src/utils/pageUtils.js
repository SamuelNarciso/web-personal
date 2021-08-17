const Utils = {
  resolveUrl: (...paths) =>
    paths.reduce((resolvedUrl, path) => {
      const urlPath = path.toString().trim();
      if (urlPath) {
        resolvedUrl +=
          (resolvedUrl === '' ? '' : '/') + urlPath.replace(/^\/|\/$/g, '');
      }
      resolvedUrl = resolvedUrl[0] !== '/' ? `/${resolvedUrl}` : resolvedUrl;
      return resolvedUrl;
    }, ''),

    resolvePageUrl: (...path)=>{
      const resolvedUrl = Utils.resolveUrl(...path)
      return resolvedUrl;
    }
};

export default Utils