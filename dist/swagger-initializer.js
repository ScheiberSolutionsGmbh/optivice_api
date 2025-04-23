window.onload = function () {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      { url: "optivice_api_1.0.0.yaml", name: "API 1.0.0" },
      { url: "optivice_api_1.0.1.yaml", name: "API 1.0.1" },
      { url: "billing.yaml", name: "Billing Test API" },
    ],
    dom_id: "#swagger-ui",
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "StandaloneLayout",
  });

  //</editor-fold>
};
