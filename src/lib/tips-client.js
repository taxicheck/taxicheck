// Советы от пассажиров. В прототипе хранятся только в браузере.
// На настоящем сайте сюда подключается база с модерацией.
import { EX } from "./texts.js";
const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
export function initTips(root, scope) {
  if (!root) return;
  const lang = document.documentElement.lang, x = EX[lang];
  const key = "taxicheck-tips";
  const load = () => { try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch (e) { return []; } };
  const save = (v) => { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) {} };
  const list = root.querySelector("[data-tips-list]"), form = root.querySelector("form"), msg = root.querySelector("[data-tips-msg]");
  const render = () => {
    const items = load().filter((t) => t.scope === scope).sort((a, b) => b.d.localeCompare(a.d));
    list.innerHTML = items.length ? items.map((t) => `<div class="rev"><div class="rev-head"><strong>${esc(t.where)}${t.app ? " · " + esc(t.app) : ""}</strong><span>${new Date(t.d).toLocaleDateString(lang)}</span></div><p>${esc(t.text)}</p></div>`).join("") : `<p class="empty">${x.tipsEmpty}</p>`;
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = form.querySelector("[name=text]").value.trim();
    if (text.length < 5) { msg.style.color = "var(--warn)"; msg.textContent = x.tipsErr; return; }
    const all = load();
    all.push({ scope, where: form.querySelector("[name=where]").value.trim() || scope, app: form.querySelector("[name=app]").value.trim(), text, d: new Date().toISOString().slice(0, 10) });
    save(all); form.reset(); form.querySelector("[name=where]").value = root.dataset.where || "";
    msg.style.color = "var(--good)"; msg.textContent = x.tipsOk; render();
  });
  render();
}
