# Шаблон Parcel

Цей проект був створений за допомогою Parcel. Для ознайомлення та налаштування
додаткових можливостей [звернися до документації](https://parceljs.org/).

## Підготовка нового проекту

1. Переконайся, що на комп'ютері встановлена LTS-версія Node.js.
   [Завантаж та встанови](https://nodejs.org/en/) її, якщо необхідно.
2. Клонуй цей репозиторій.
3. Зміни ім'я папки з `parcel-project-template` на ім'я свого проекту.
4. Створи новий порожній репозиторій на GitHub.
5. Відкрий проект в VSCode, запусти термінал та зв'яжи проект з GitHub-репозиторієм
   [за інструкцією](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Встанови залежності проекту в терміналі командою `npm install`.
7. Запусти режим розробки, виконавши команду `npm start`.
8. Перейди у браузері за адресою [http://localhost:1234](http://localhost:1234).
   Ця сторінка буде автоматично перезавантажуватися після збереження змін у
   файлах проекту.

## Файли та папки

- Усі паршали файлів стилів повинні лежати в папці `src/sass` та імпортуватися в
  файли стилів сторінок. Наприклад, для `index.html` файл стилів називається
  `index.scss`.
- Зображення додавай у папку `src/images`. Збірник оптимізує їх, але тільки
  під час деплою продакшн версії проекту. Усе це відбувається у хмарі, щоб не
  навантажувати твій комп'ютер, так як на слабких машинах це може зайняти багато
  часу.

## Деплой

Для настройки деплою проекту необхідно виконати кілька додаткових кроків для налаштування свого репозиторію. Зайдіть на вкладку `Settings` і в підсекції `Actions` виберіть пункт `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Прокрутіть сторінку до останньої секції, в якій переконайтеся, що вибрані параметри, як на наступному зображенні, і натисніть `Save`. Без цих налаштувань збірка не матиме достатньо прав для автоматизації процесу деплою.

![GitHub actions settings](./assets/actions-config-step-2.png)

Продакшн версія проекту буде автоматично збиратися та деплоїтися на GitHub Pages, у гілку `gh-pages`, кожного разу, коли оновлюється гілка `main`. Наприклад, після прямого пушу або прийнятого пул-реквесту. Для цього необхідно в файлі `package.json` відредагувати поле `homepage` та скрипт `build`, замінивши `your_username` та `your_repo_name` на свої, і відправити зміни на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```
Далі необхідно зайти в настройки GitHub-репозиторія (`Settings` > `Pages`) і
встановити роздачу продакшн версії файлів з папки `/root` гілки `gh-pages`, якщо
це не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплою

Статус деплою останнього коміту відображається іконкою біля його ідентифікатора.

- **Жовтий колір** - виконується збірка та деплой проекту.
- **Зелений колір** - деплой завершився успішно.
- **Червоний колір** - під час лінтинга, збірки або деплою сталася помилка.

Детальну інформацію про статус можна переглянути, клікнувши по іконці та перейшовши
по посиланню `Details` в спливаючому вікні.

![Deployment status](./assets/status.png)

### Жива сторінка

Через деякий час, зазвичай декілька хвилин, живу сторінку можна буде переглянути
за адресою, вказаною в відредагованому властивості `homepage`. Наприклад, ось
посилання на живу версію для цього репозиторію:
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

Якщо відкривається порожня сторінка, переконайся, що в закладці `Console` немає помилок,
пов'язаних з неправильними шляхами до CSS і JS файлів проекту (**404**). Ймовірно,
ви ввели неправильне значення властивості `homepage` або скрипту `build` в
файлі `package.json`.

## Як це працює

![Як це працює](./assets/how-it-works.png)

1. Після кожного пушу до гілки `main` репозиторію на GitHub запускається спеціальний
   скрипт (GitHub Action) з файлу `.github/workflows/deploy.yml`.
2. Всі файли репозиторію копіюються на сервер, де проект ініціалізується та
   проходить збірку перед деплоєм.
3. Якщо всі кроки пройшли успішно, зібрана продакшн версія файлів проекту
   відправляється до гілки `gh-pages`. У випадку невдачі в лозі виконання
   скрипта буде вказано, в чому проблема.
