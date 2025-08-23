# Публичный сайт phpcommunity.ru

![site cover](https://github.com/php-communities/public-site/blob/master/public/images/content/main-image.png?raw=true)

-   Сайт сделан на Next.js.
-   Опубликован на GitHub Pages.
-   Контент управляется через файлы Markdown (`*.md`).
-   Контрибьютится через open source.

## Как добавить свое сообщество

Смотри по примеру в каталоге `/content/communities`.

## Как добавить свое событие

Смотри по примеру в каталоге `/content/events`.

## Хочешь добавить фичу?

Сделай PR или открой issue.

---

## Требования к окружению
- Node.js ^20.
- npm ^10.

## Локальная разработка
0. Создай файл переменных окружения для локальной разработики, внеси правки если нужно:
   ```sh
   cp .env.local.example .env.local
   ```
2. Установи зависимости:
   ```sh
   npm ci
   ```
   Во время установки Husky автоматически настроит git-хуки (скрипт `prepare`).
2. Запусти dev-сервер:
   ```sh
   npm run dev
   ```
   По умолчанию приложение доступно на http://localhost:3000 (скрипт сам освободит порт 3000 при необходимости).
3. (Опционально) Storybook для UI-компонентов:
   ```sh
   npm run storybook
   ```
   Storybook будет доступен на http://localhost:6006.

> Примечание про .env: в репозитории нет шаблона `.env_example`. Если переменные окружения потребуются, создай файл `.env` вручную.

## Полезные команды
- Проверка типов: `npm run check:ts`
- Линтинг: `npm run check:lint`
- Форматирование: `npm run check:format`
- Тесты: `npm run check:test`
- Все проверки разом: `npm run check:all`
- Тесты с покрытием: `npm run test:coverage`
- Очистка билд-артефактов: `npm run clean`

## Сборка и проверка перед пушем
Перед отправкой изменений на сервер рекомендуется запустить все проверки и собрать проект:
```sh
npm run check:all && npm run build
```
Если нужно локально проверить production-сборку:
```sh
npm run build
npm run prod
# приложение будет доступно на http://localhost:3000
```

## Дополнительно
- Анализ бандла: `npm run analyze` (выполняет `next build` с `ANALYZE=true`).
- Генерация токенов дизайна: `npm run build-tokens`.
- Генерация API-клиента: `npm run api-codegen`.
- Визуализация зависимостей приложения: `npm run cruiser` (создает `dependency-graph.svg` и `docs.html`).
