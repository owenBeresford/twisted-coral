import path from "node:path"; 
import url from "node:url"; 
import fs from "node:fs";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

function n(e2) {
  const t2 = { template: "v1", sample: "dynamic string" }, n2 = new URLSearchParams(e2.search);
  let r2 = {};
  const o2 = Object.keys(t2);
  for (let e3 in o2) if (n2.has(o2[e3])) {
    let t3 = n2.get(o2[e3]);
    t3 = decodeURI(t3), t3 = t3.replaceAll("<", "&lt;"), t3 = t3.replaceAll(">", "&gt;"), r2[o2[e3]] = t3;
  } else r2[o2[e3]] = t2[o2[e3]];
  return r2;
}
function r(n2) {
  const r2 = { v1: "v1.html", v2: "v2.html" };
  if (!(n2 in r2)) throw new Error("Unknown template " + n2);
  const o2 = path.join(__dirname, r2[n2]);
  return fs.readFileSync(o2, { encoding: "utf8", flag: "r" });
}
function o(e2) {
  const t2 = n(e2);
  return r(t2.template).replace(/\bSAMPLE\b/g, t2.sample);
}
function a(e2) {
  const t2 = o(new URL(e2.url));
  return new Response(t2, { status: 200, headers: { "cache-control": "max-age=0", "content-type": "text/html; encoding= utf8", expires: (/* @__PURE__ */ new Date()).toString() } });
}
const c = { map_templates: o, content_template: r, sanitise_getopts: n };
export {
  a as GET,
  c as TEST_ONLY
};
