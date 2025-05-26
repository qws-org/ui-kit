# @qws-org/ui-kit

### [Список доступных компонентов тут (Storybook)](https://qws-org.github.io/ui-kit/?path=/docs/ui-kit-components-accordion--docs)

## Технологический стек:

- ["tailwindcss": "3.4.15"](https://v3.tailwindcss.com/)
- react >=18
- [react-aria](https://react-spectrum.adobe.com/react-aria/index.html)
---

##  Настройка проекта:


- установить пакет
```shell
npm install @qws-org/ui-kit
```

---
## Подключение в проект:


- в корне проекта подключаем компоненты из ui-kit
![img.png](./docs/img.png)

- Используем компоненты из библиотеки

---

## Contributing

- копируем .npmrc
```shell
cp .npmrc.example .npmrc
```

- создаем приватный github токен https://github.com/settings/tokens
- выдаем права на чтение/запись из репозитория 
![img.png](docs/img_2.png)
- Устанавливаем заисимости
```shell
pnpm install
```
- Запускаем сторибук (dev разработка)
```shell
pnpm run storybook
```

- После необходимых доработок комитим изменения (ждем пока пройдут прекомит хуки)
- Далее запускаем одну из команд (зависит от характера изменений) :
![img.png](docs/img_1.png)
- Запускаем команду 
```shell
pnpm publish-package
```
- Пушим изменения в удаленный репозиторий
- Далее уже в кастомном приложении можем обновить версию пакета и пользоваться