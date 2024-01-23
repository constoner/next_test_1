# Тестовое задание на позицию Next.js разработчика

деплой тут http://

## Задание

- Нужно сделать проект на **next.js**, реализующий простой список элементов. Визуально оформить можно как то по простому. Например, используя _bootstrap_
- Список элементов брать через апи вызов - https://\*\*\*
- Элементы располагаются на нескольких страницах, в примере на 2х. Нужно сделать вывод списка страниц и переключение по ним по клику. При клике на страницу должен меняться урл в браузере, например на `/list/1`, `/list/2`
- При заходе в браузере по такому урлу, мы сразу должны видеть соответствующую страницу
- При клике на элемент делается апи запрос - https://\*\*\* Показывается попап (модалка) с заголовком и текстом из ответа апи. Урл в браузере меняется, например на `/item/5`.При заходе в браузер по такому урлу мы сразу видим модалку с соответствующим элементом. Поскольку при этом неизвестно, на какой странице находится элемент, пусть при таком заходе страница будет всегда первой.

- Формат урлов списка элементов и попапа с элементом - не принципиальны. Главное, что бы они корректно работали. Это могут быть и просто _get_ параметры. Например, `/?page=1`, `/?page=2`, `/?item=5`, `/?item=10`, но какое либо ЧПУ все же предпочтительно

## Стэк

- next 14.1.0
- react 18.2.0
- vercel for deploy
- bootstrap

## Исползование