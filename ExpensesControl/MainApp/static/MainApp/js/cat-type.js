var type_select = document.getElementById("id_type");
var cat_select = document.getElementById("id_category");
let optionList = cat_select.getElementsByTagName('option');
var categories = JSON.parse(document.getElementById('categories').textContent);
var is_first = true;

// Устанавливает категории в зависимости от типа
if (cat_select && type_select){
    function SortCategories(){
        // Подстраиваем тип под категорию в первый раз
        if (cat_select.value && is_first) {
            type_select.value = categories[cat_select.value];
        }

        // Ставим пустое значение категории при изменении типа, если не в первый раз
        if (!is_first){
            cat_select.value = "";
        }

        // Скрываем элементы
        for (i = 1; i < optionList.length; i++) {
            if (categories[optionList[i].value] == type_select.value) {
                optionList[i].setAttribute('style', 'display:block;');
            }
            else {
                optionList[i].setAttribute('style', 'display:none;');
            }
        }
    }
    
    SortCategories();
    is_first = false;

    type_select.addEventListener("change", SortCategories);
};