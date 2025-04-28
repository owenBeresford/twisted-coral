const { dirname: t } = await import("./__vite-browser-external-BDMct_Gn.js"), { fileURLToPath: n } = await import("./__vite-browser-external-BDMct_Gn.js"), r = t(n(import.meta.url));
function o(t2) {
  const n2 = function(e2) {
    const t3 = { template: "v1", sample: "dynamic string" }, n3 = new URLSearchParams(e2.search);
    let r2 = {};
    for (let e3 in Object.keys(t3)) n3.has(e3) ? r2[e3] = decodeURI(n3.get(e3)) : r2[e3] = t3[e3];
    return r2;
  }(t2);
  return function(t3) {
    const n3 = { v1: "v1.html", v2: "v2.html" };
    if (!(t3 in n3)) throw new Error("Unknown template " + t3);
    const o2 = e.join(r, n3[t3]);
    return fs.readFileSync(o2, { encoding: "utf8", flag: "r" });
  }(n2.template).replace(/\bSAMPLE\b/g, n2.sample);
}
function a(e2) {
  const t2 = o(new URL(e2.url));
  return new Response(t2, { status: 200, headers: { "cache-control": "max-age=0", "content-type": "text/html; encoding= utf8", expires: (/* @__PURE__ */ new Date()).toString() } });
}
export {
  a as GET
};
