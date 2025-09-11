# SEO Tools — готовый набор страниц

## Как использовать (быстрый путь без CLI, подходит для Windows 7)
1. Создайте публичный репозиторий на GitHub (например, `seo-tools`).
2. Загрузите все файлы и папки из этого архива в репозиторий (через **Add file → Upload files**).
3. Зайдите на vercel.com → Add New → Project → Import Git Repository → выберите репозиторий → Deploy.
4. После деплоя проверьте:
   - `/utm.html` — UTM-генератор
   - `/api/fetch?url=https://example.com` — JSON ответ от прокси

## Что внутри
- Статические страницы (UTM, Slug, Title/Description, FAQ Schema, Robots/Sitemap, OG Preview, Redirects)
- Serverless-функция `/api/fetch.js` для безопасного получения HTML/заголовков
- `assets/` со стилями и логотипом
- `robots.txt` и `sitemap.xml`

## Монетизация
- Отредактируйте ссылки в `support.html` (BuyMeACoffee/Gumroad/Boosty)

## Примечания
- Язык страниц — ru
- Никаких зависимостей и сборщиков — все работает как есть
