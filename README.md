# @qws-org/ui-kit

## Технологический стек:

- ["tailwindcss": "3.4.15"](https://v3.tailwindcss.com/)
- react >=18
- [react-aria](https://react-spectrum.adobe.com/react-aria/index.html)

---

##  Настройка проекта:

- создать файл .npmrc со следующим содержимым
```shell
touch .npmrc
```

- Заполнить его данными:
```text
always-auth=true

# Scope вашей организации — qws-org
@qws-org:registry=https://npm.pkg.github.com

# Токен для GitHub Packages
//npm.pkg.github.com/:_authToken=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
```

- установить пакет
```shell
npm install @qws-org/ui-kit
```

---
## Подключение в проект:


- в корне проекта подключаем компоненты из ui-kit
![img.png](./docs/img.png)

- Используем компоненты из библиотеки

