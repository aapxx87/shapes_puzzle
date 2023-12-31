v.3.12_mob (PWA) color schema

Release notes:








v.3.1_mob (PWA) refactoring

Release notes:

1) из ИвентЛистенеров по кнопкам создания Фигуры и Шаблона (btn_shape, ) вынесен в отдельную функцию процесс создания фигур: фигура или шаблон. Функция: build_shape 

2) btn_shape переименована в btn_create_shape

3) btn_sample переименована в btn_create_template

4) показ и скрытие фигур для построения template вынесены в отдельную функцию: display_template_figures. Функция принимает аргумент string, из которого затем формирует css свойство display, то есть принимает либо 'none' - фигуры дял построения шаблона скрыты, либо 'block' - показаны на экране при построении шаблона  



