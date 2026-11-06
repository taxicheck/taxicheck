#!/bin/bash
# Собирает печатные карты в PDF (A4) из готового сайта: public/pdf/taxicheck-munich-map-{ru,de,en}.pdf
# Запуск из корня репозитория: npx astro build && bash scripts/pdf.sh && npx astro build
set -e
PORT=${PORT:-8799}
(cd dist && python3 -m http.server $PORT >/dev/null 2>&1) & SRV=$!
trap "kill $SRV 2>/dev/null || true" EXIT
sleep 1
mkdir -p public/pdf
CHROME=$(command -v google-chrome || command -v chromium || command -v chromium-browser)
for l in ru de en; do
  "$CHROME" --headless=new --no-sandbox --disable-gpu --no-pdf-header-footer --virtual-time-budget=3000 \
    --print-to-pdf="public/pdf/taxicheck-munich-map-$l.pdf" "http://localhost:$PORT/$l/munich/map/" 2>/dev/null
done
ls -la public/pdf
